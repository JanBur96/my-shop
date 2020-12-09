const advancedResults = (model, populate) => async (req, res, next) => {
  let query;

  // Copy req.query
  const reqQuery = { ...req.query };

  // Fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit'];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param]);

  // Create query string from req.query (which is an object)
  let queryStr = JSON.stringify(reqQuery);

  // Take gt, gte, lt... and put a $ sign in front of it
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );

  // Finding resource with JSON.parse()
  query = model.find(JSON.parse(queryStr));

  // Select Fields to be shown
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  // Sort by -createdAt or custom
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  let category = query._conditions.categories;

  if (category) {
    category = Object.values(category);
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 100;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  let total;
  if (category) {
    total = await model.countDocuments({ categories: category });
  } else {
    total = await model.countDocuments();
  }

  // Skip certain amount of resources (startIndex gives us the right amount to skip) and limit it
  query = query.skip(startIndex).limit(limit);

  if (populate) {
    query = query.populate(populate);
  }

  // Executing query
  const results = await query;

  // Pagination result
  const pagination = {};

  // Next site if endIndex isn't reached
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  // Prev site if we're not on page 1
  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.advancedResults = {
    success: true,
    count: results.length,
    pagination,
    data: results,
  };

  next();
};

module.exports = advancedResults;
