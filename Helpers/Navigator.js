import navi from './urls'


export default function(stage){
    test('Navigate', async t => {
        await t
            .navigateTo(navi[stage]);
    });
}
