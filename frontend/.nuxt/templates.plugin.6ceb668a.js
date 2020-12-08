import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

    import  { faFacebook as fortawesomefreebrandssvgicons_faFacebook } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faFacebook)

    import  { faTwitter as fortawesomefreebrandssvgicons_faTwitter } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faTwitter)

    import  { faInstagram as fortawesomefreebrandssvgicons_faInstagram } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faInstagram)

    import  { faGoogle as fortawesomefreebrandssvgicons_faGoogle } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faGoogle)

    import  { faUser as fortawesomefreeregularsvgicons_faUser } from '@fortawesome/free-regular-svg-icons'
    library.add(fortawesomefreeregularsvgicons_faUser)

    import  { faEnvelope as fortawesomefreeregularsvgicons_faEnvelope } from '@fortawesome/free-regular-svg-icons'
    library.add(fortawesomefreeregularsvgicons_faEnvelope)

    import  { faCompass as fortawesomefreeregularsvgicons_faCompass } from '@fortawesome/free-regular-svg-icons'
    library.add(fortawesomefreeregularsvgicons_faCompass)

    import  { faEdit as fortawesomefreeregularsvgicons_faEdit } from '@fortawesome/free-regular-svg-icons'
    library.add(fortawesomefreeregularsvgicons_faEdit)

    import  { faTrashAlt as fortawesomefreeregularsvgicons_faTrashAlt } from '@fortawesome/free-regular-svg-icons'
    library.add(fortawesomefreeregularsvgicons_faTrashAlt)

    import  { faUserEdit as fortawesomefreesolidsvgicons_faUserEdit } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faUserEdit)

    import  { faArrowRight as fortawesomefreesolidsvgicons_faArrowRight } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faArrowRight)

    import  { faArrowLeft as fortawesomefreesolidsvgicons_faArrowLeft } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faArrowLeft)

    import  { faSearch as fortawesomefreesolidsvgicons_faSearch } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faSearch)

    import  { faGift as fortawesomefreesolidsvgicons_faGift } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faGift)

    import  { faShare as fortawesomefreesolidsvgicons_faShare } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faShare)

Vue.component('fa', FontAwesomeIcon)
Vue.component('fa-layers', FontAwesomeLayers)
Vue.component('fa-layers-text', FontAwesomeLayersText)
