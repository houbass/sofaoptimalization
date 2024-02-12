// api keys
import { apiKeys } from "./apiKeys";

//CREATE NEW CONTACT
async function createContact(email) {
    const options = {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKeys.subscribe
        },
        body: JSON.stringify({
            email: email,
            updateEnabled: false,
            listIds: [2],
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
        console.error('Error creating contact:', error);
    }
}

//CREATE NEW CONTACT
async function updateContact(email) {
    const options = {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKeys.subscribe
        },
        body: JSON.stringify({
            email: email,
            emailBlacklisted: false,
            updateEnabled: true,
            listIds: [2],
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
        console.error('Error creating contact:', error);
    }
}


//GET CONTACTS
async function getContacts() {
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'api-key': apiKeys.subscribe
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
            const blackList = contactsData.contacts.filter(e => e.email === email)[0]?.emailBlacklisted;

            if(existStatus === false) {
                await createContact(email);
                return "Thank you for subscription :))"
            } else if(existStatus === true && blackList === true) {
                await updateContact(email);
                return "Thank you for subscription :))"
            }
            else{
                return "*It looks that you are already subscribed";
            }
        } catch (error) {
            
            return "SOMETHING WENT WRONG, CHECK YOUR INTERNET CONNECTION OR TRY IT AGAIN LATER";

        }
    } else{
        return "*Email is not valid";
    }
}
