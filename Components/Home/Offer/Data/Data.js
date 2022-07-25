import ScaleNClean from '../../../../public/Home/Offer/Scale and clean.jpg';
import teethWhitening from '../../../../public/Home/Offer/TakeHome Teeth Whitening Offer.jpg';
import DentalImplants from '../../../../public/Home/Offer/Dental Implant.jpg';

const offer = [
{id:"home_offer1", title:"$149 Scale and Clean & Check-up* or Gap-Free", list:["Comprehensive Dental Examination","Scale & clean","Fluoride"], image: ScaleNClean, alt:"Scale & Clean", offerBtn: true, price: "149*", small: null},

{id:"home_offer2", title:"TakeHome Teeth Whitening Offer", list:["Whitening consultation with Dentist","Whitening trays made to fit you","Whitening Gel and Demonstration of how to use it"], image: teethWhitening, alt:"Teeth Whitening", offerBtn: true, price: "$249*", small:"or 4 equal payments of $62.25*"},

{id:"home_offer3", title:"Dental Implant (implant, crown, and abutment) Offer", list:["$3700* or $87* per week","At Bayswater dentist we use the leading edge implant Kit from MIS"], image: DentalImplants, alt:"dental implants", offerBtn: true, price: "$3700*", small:"or at just $87* per week"},
];

export default offer