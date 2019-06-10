import Randoms from "../Helpers/RandomNames";

const rN = Randoms.random10Dig();
const zipN = Randoms.random6Dig();

export default {
    
    url :'https://stage.manufacton.com/#/',
    email:'',
    password:'',

    companyEdit : {
        compName : `Company-${rN}`,
        a1Street : `Street-1-${rN}`,
        a1City: `City-1-${rN}`,
        a1State: `State-1-${rN}`,
        a1Country: `Country-1-${rN}`,
        a1Phone: rN,
        a2Street : `Street-2-${rN}`,
        a2City: `City-2-${rN}`,
        a2State: `State-2-${rN}`,
        a2Country: `Country-2-${rN}`,
        a2Phone: rN,
        billingName: `BillingName-${rN}`,
        billingEmail: `www.${rN}.com`,
        manufRuns: `ManufRun-${rN}`,
        locName: `Location-${rN}`,
        locOwnerName: `Owner-${rN}`,
        locStreetName: `Street-${rN}`,
        locCityName: `City-${rN}`,
        locStateName: `State-${rN}`,
        locZip: zipN,
        giLocName: `Location-${rN}`,
        giOwnerName: `Owner-${rN}`,
        giStreetName: `Street-${rN}`,
        giCityName: `City-${rN}`,
        giStateName: `State-${rN}`,
        giLocZip: zipN,
    },
    
    memberAdd : {
      name: `Member-${rN}`,
      email: `qa@user${rN}.comp`,
      admin: false,
      role: `QA`,
      phNo: rN
    },
    
    companyAdd : {
      compName: `Company-${rN}`,
      compType : 'GC',
      compContact: `Contact-${rN}`,
      compEmail: `qa@comp${rN}.comp`,
      compPhNo: rN
    },
    
    projectCreation : {
      projName : `Project-${rN}`,
      locName : `Location-${rN}`,
      streetName : `Street-${rN}`,
      cityName : `City-${rN}`,
      stateName : `State-${rN}`,
      zip : zipN,
      lvl : `Level-${rN}`,
      zone : `Zone-${rN}`,
      projId : `ProjectID-${rN}`,
      memName : 'Name',
      compName : 'Comp 1',
      dLocName : `DLoc-${rN}`,
      dOwnerName: `DOwner-${rN}`,
      dStreetName: `DStreet-${rN}`,
      dCityName: `DCity-${rN}`,
      dStateName: `DState-${rN}`,
      dZipName: zipN,
      dImportName : 'Loc Name'
    },

    materialOrderName : Randoms.name(),

    prefabOrderName : Randoms.name(),

    catIdData : {
      id: `CATALOG-${rN}`,
      name : `Name-${rN}`,
      catalogId : `CatID-${rN}`,
      measUnits : 'lb'
    }
}