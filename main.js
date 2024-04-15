const queryTimeTravel = async () => {
    try {
    const res = await fetch("https://reqres.in/api/users");
        if (res.ok) {
            return await res.json();
        } else {
            console.log('Error with api call');
        }
    } catch (e) {
        console.log(e);
    }
}

const test = async () => {
    try {
        const data = await queryTimeTravel();
        console.log(data);
    } catch (err) {
        console.log(err)
    }
}

test()

// const updateCandidateTimeTravel = () => {

// }


// const handleSubmit = () => {
//     updateCandidateTimeTravel();
// }


// handleSubmit();
