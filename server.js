/* EMAIL-HOST */
const EmailHostServer = {
    Users = {
        id: number,
        password: string,
        createdAt: date,
        refreshedAt: date,
        Accounts: [{
            accountName: string,
            userName: string,
            emailAdress: string,
            password: string,
            createdAt: date,
            updatedAt: date,
            inbox = {
                subject: string,
                date: date,
                sender: string,
            },
            outbox = {
                subject: string,
                date: date,
                receiver: string,
            },
            typeId: string,
        }]

    }
}


/*Internet Radio....aka SPOTIFY */
const Speakerfy = {
        Users: [{
            id: string,
            email: string,
            createdAt: date,
            updatedAt: date,
            library = {
                playlist: string[],
                stations: string[],
                songs: string[],
                albums: [],
                artists: [],
            },
            following: [],
            followedBy: [],
        }],
        browseBy= {
            radio: [genres],
            artist: [string],
            album: [string],
        }
}

/* COFFEE-TO-GO */
const coffeeFanApptic = {
        type: [string],
        address: string,
        returnedResults = [{
            shopName: string,
            openNow: boolean,
            ratings: number,
            distance: string,
            price: number,
            minOrderAmmount: number,
            delivers: boolean,
            menu = {
               drinks: [{
                   price: number,
                   category: string,
                   hasCaffeine: boolean,
               }] 
            },
        }],
        user = {
            email: string,
            createdAt: date,
            updatedAt: date,
            savedFaves: [],
            shoppingCart: [],
            orderHistory: [{
                orderDate: date,
                shopName: string,
                location: string,
                endTotal: number,
                completed: boolean,
            }],
        }
}

/*TEAM-TRACKER APP */
const newSports = {
    user = {
        id: number,
        email: string,
        createdAt: date,
        updatedAt: date,
        preferences= [
            alerts,
            faveLeague,
            faveTeam
            ],
    schedules: date/chart,
    sports: [{}],
    teams: [{}],
    countries: [{}],


   },
}