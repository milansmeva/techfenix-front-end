

// report format
/*

{
    reportId : 1w3wqeqwedsaada,
    reportSubmittedBy : username,
    companyId : 2qwqweqweqwe,
    severity : medium,
    state: trigger/open,
    weekness : [enum],
    bounty : [],
    timeline : [
        {
            timelineItemId : 213123123,
            postedBy : user,
            data : htmlString,
            timestamp : date,
        },
    ]
}



*/

const initialState = []


const reportsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'main':
            return state;
        default:
            return state;
    }

}


export default reportsReducer