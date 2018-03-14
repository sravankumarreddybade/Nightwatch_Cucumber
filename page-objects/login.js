module.exports = {
    
        url: function() { 
            return this.api.launchUrl + '/';
        },
        
        elements: {
            gmail: '#gbw > div > div > div.gb_ne.gb_R.gb_Kg.gb_Ag > div:nth-child(2) > a',
            email: '#identifierId',
            emailconfirmbutton: '//#identifierNext > content > span',
            password: '#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input',
            loginbutton: '#passwordNext > content > span',
            inbox_text: '#\3a iz > div > div.aio.UKr6le > span > a'
            },
    
    };  