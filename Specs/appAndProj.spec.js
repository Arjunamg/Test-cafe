import BasicParams from './../Helpers/BasicParams';
import { Selector,ClientFunction, Role } from "testcafe";
import GC_Role from './../Helpers/Roles';
import randomName from './../Helpers/RandomNames';
import Project from './../Tests/App&Project/projectCreation'
import compProfile from './../Tests/App&Project/companyProfile'
import globalMember from "../Tests/App&Project/globalMemAdd";


const rN = randomName.random10Dig();
const zipN = randomName.random6Dig();

const pData = {
    projName : `Project-${rN}`,
    locName : `Location-${rN}`,
    streetName : `Street-${rN}`,
    cityName : `City-${rN}`,
    stateName : `State-${rN}`,
    zip : zipN,
    lvl : `Level-${rN}`,
    zone : `Zone-${rN}`,
    projId : `ProjectID-${rN}`,
    memName : `Member-${rN}`,
    compName : `Company-${rN}`,
    dLocName : `DLoc-${rN}`,
    dOwnerName: `DOwner-${rN}`,
    dStreetName: `DStreet-${rN}`,
    dCityName: `DCity-${rN}`,
    dStateName: `DState-${rN}`,
    dZipName: zipN,
    dImportName : 'Name'
}

const compEditData = {
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
}

const mData = {
  name: `user-${rN}`,
  email: `qa@user${rN}.comp`,
  admin: false,
  role: `QA`,
  phNo: rN
};


fixture`App&Project`
  .beforeEach(async t => {
    await t
      .maximizeWindow()
      .wait(500).useRole(GC_Role());
  });

test('App&Project', async t => {
    await globalMember.GlobalMemberAdd(mData)
    await compProfile.CompanyProfileEdit(compEditData)
    await Project.ProjectAdd(pData)
})    

