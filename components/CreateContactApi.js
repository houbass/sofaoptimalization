

//CREATE NEW CONTACT
async function createContact(email) {
    const options = {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': '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'
        },
        body: JSON.stringify({
        email: email,
        updateEnabled: false
        }),
    };
    try {
        const response = await fetch('https://api.brevo.com/v3/contacts', options);
    
        // Check if the request was successful (status code 2xx)
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        //const data = await response.json();
        //console.log("CONTACT CREATED SUCCESFULLY")
    
    } catch (error) {
        //console.error('Error creating contact:', error);
    }
}


//GET CONTACTS
async function getContacts() {
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'api-key': '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'
        },
    };
    try {
        const response = await fetch('https://api.brevo.com/v3/contacts', options);
        // Check if the request was successful (status code 2xx)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function subscribe(email) {
    if(email.toLowerCase().includes("@") && email.toLowerCase().includes(".") && email.length >= 6) {

        try {
            //CHECK FOR EXISTING CONTACTS
            const contactsData = await getContacts()
            const existingContacts = contactsData.contacts.map(e => e.email);
            const existStatus = existingContacts.includes(email.toLowerCase());

            if(existStatus === false) {
                await createContact(email);
                return "Thank you for subscription :))"
            } else{
                return "*It looks that you are already subscribed";
            }
        } catch (error) {
            return "SOMETHING WENT WRONG, CHECK YOUR INTERNET CONNECTION OR TRY IT AGAIN LATER";
        }
    } else{
        return "*Email is not valid";
    }
}
