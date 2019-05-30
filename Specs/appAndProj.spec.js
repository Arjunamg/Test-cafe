import Data from './../Helpers/Feeder';
import { Selector,ClientFunction, Role } from "testcafe";
import GC_Role from './../Helpers/Roles';
import Project from './../Tests/App&Project/projectCreation'
import compProfile from './../Tests/App&Project/companyProfile'
import globalMember from "../Tests/App&Project/globalMemAdd";
import globalComp from '../Tests/App&Project/globalCompAdd';


fixture`App&Project`
  .beforeEach(async t => {
    await t
      .maximizeWindow()
      .wait(500).useRole(GC_Role());
  });

test('App&Project', async t => {
    await globalMember.GlobalMemberAdd(Data.memberAdd)
    await globalComp.GlobalCompAdd(Data.companyAdd)
    await compProfile.CompanyProfileEdit(Data.companyEdit)
    await Project.ProjectAdd(Data.projectCreation)
})    

