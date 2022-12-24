'use strict';
const PLANTYPE = require('../../../enums/planTypes');

module.exports = [{
  plan_type: PLANTYPE.FEE,
  plan_title: 'Fees of regular class',
  plan_price: 150.00,
  plan_nofkids: 1,
}, {
  plan_type: PLANTYPE.FEE,
  plan_title: 'Fees of special class',
  plan_price: 180.00,
  plan_nofkids: 1,
}, {
  plan_type: PLANTYPE.FEE,
  plan_title: 'Regular class (includes both parents)',
  plan_price: 280.00,
  plan_nofkids: 2,
}, {
  plan_type: PLANTYPE.FEE,
  plan_title: 'Special class (includes both parents)',
  plan_price: 360.00,
  plan_nofkids: 2,
}, {
  plan_type: PLANTYPE.PACK,
  plan_title: '3 classes pack',
  plan_price: 450.00,
  plan_nofkids: 1,
}, {
  plan_type: PLANTYPE.PACK,
  plan_title: '6 classes pack FAMILY CARD (2 Months membership)',
  plan_price: 800.00,
  plan_nofkids: 1,
}, {
  plan_type: PLANTYPE.PACK,
  plan_title: '12 classes pack FAMILY CARD (4 Months membership)',
  plan_price: 1500.00,
  plan_nofkids: 1,
}, {
  plan_type: PLANTYPE.PACK,
  plan_title: '6 classes pack for siblings',
  plan_price: 1500.00,
  plan_nofkids: 2,
}, {
  plan_type: PLANTYPE.PACK,
  plan_title: '6 classes pack for siblings',
  plan_price: 2000.00,
  plan_nofkids: 3,
}, {
  plan_type: PLANTYPE.PACK,
  plan_title: '12 classes pack for siblings',
  plan_price: 2700.00,
  plan_nofkids: 2,
}, {
  plan_type: PLANTYPE.PACK,
  plan_title: '12 classes pack for siblings',
  plan_price: 3700.00,
  plan_nofkids: 3,
}]