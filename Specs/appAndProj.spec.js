/**
 * Created by Dinesh on 24/05/19.
 */

import BasicParams from './../Helpers/BasicParams';
import { Selector,ClientFunction, Role } from "testcafe";
import GC_Role from './../Helpers/Roles';
import randomName from './../Helpers/RandomNames';
import Project from './../Tests/App&Project/projectCreation'

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


fixture`App&Project`
  .beforeEach(async t => {
    await t
      .maximizeWindow()
      .wait(500).useRole(GC_Role());
  });

test('App&Project', async t => {
    await Project.ProjectAdd(pData)
})    

