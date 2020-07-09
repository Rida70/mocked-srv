const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');

const router = jsonServer.router(path.join(__dirname, 'db.json'), {
    foreignKeySuffix: '_id',
});
const middlewares = jsonServer.defaults();

const routes = {
    '/ports/:port_id/berths/:id': '/berths/:id',
    '/ports/:port_id/sensors/:id/info': '/sensorsInfo/:id',
};

server.use(middlewares);
server.use(jsonServer.rewriter(routes));


server.use((req, res, next) => {
    if (req.url.includes(`occupation`)) {
        const response = [
            {
                type: 'MEMBER',
                status: 'OCCUPIED',
                length_cms: 850,
                berth_id: 1,
                created_at: '2020-01-03T18:55:59Z',
            },
            {
                type: 'TRANSIENT',
                status: 'OCCUPIED',
                length_cms: 555,
                berth_id: 2,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'TRANSIENT',
                status: 'OCCUPIED',
                length_cms: 555,
                berth_id: 2312,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'TRANSIENT',
                status: 'OCCUPIED',
                length_cms: 555,
                berth_id: 2,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'TEMPORARY_TRANSIENT',
                status: 'OCCUPIED',
                length_cms: 555,
                berth_id: 3,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'MEMBER',
                status: 'FREE',
                length_cms: 800,
                berth_id: 4,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'MEMBER',
                status: 'FREE',
                length_cms: 800,
                berth_id: 48,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'MEMBER',
                status: 'FREE',
                length_cms: 800,
                berth_id: 488,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'MEMBER',
                status: 'OCCUPIED',
                length_cms: 800,
                berth_id: 4,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'TRANSIENT',
                status: 'FREE',
                length_cms: 800,
                berth_id: 456,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'MEMBER',
                status: 'FREE',
                length_cms: 850,
                berth_id: 5,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'TEMPORARY_TRANSIENT',
                status: 'FREE',
                length_cms: 2400,
                berth_id: 231,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'TEMPORARY_TRANSIENT',
                status: 'FREE',
                length_cms: 2000,
                berth_id: 21,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'TEMPORARY_TRANSIENT',
                status: 'OCCUPIED',
                length_cms: 2000,
                berth_id: 23,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'TEMPORARY_TRANSIENT',
                status: 'OCCUPIED',
                length_cms: 2000,
                berth_id: 251,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'TEMPORARY_TRANSIENT',
                status: 'FREE',
                length_cms: 2000,
                berth_id: 2111,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'TEMPORARY_TRANSIENT',
                status: 'OCCUPIED',
                length_cms: 2000,
                berth_id: 12345,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'TEMPORARY_TRANSIENT',
                status: 'FREE',
                length_cms: 2400,
                berth_id: 234,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'TEMPORARY_TRANSIENT',
                status: 'FREE',
                length_cms: 2000,
                berth_id: 218,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'TEMPORARY_TRANSIENT',
                status: 'OCCUPIED',
                length_cms: 2000,
                berth_id: 238,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'TEMPORARY_TRANSIENT',
                status: 'OCCUPIED',
                length_cms: 2000,
                berth_id: 2518,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'TEMPORARY_TRANSIENT',
                status: 'FREE',
                length_cms: 2000,
                berth_id: 21118,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'TEMPORARY_TRANSIENT',
                status: 'OCCUPIED',
                length_cms: 2000,
                berth_id: 123458,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'MEMBER',
                status: 'OCCUPIED',
                length_cms: 1000,
                berth_id: 422,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'MEMBER',
                status: 'OCCUPIED',
                length_cms: 1000,
                berth_id: 4232,
                created_at: '2019-11-26T08:55:59.523Z',
            },
            {
                type: 'MEMBER',
                status: 'OCCUPIED',
                length_cms: 1000,
                berth_id: 4212,
                created_at: '2019-11-26T08:55:59.523Z',
            },
        ];

        return res.status(200).json(response);
    }

    if (req.url === `/auth` && req.method === 'POST') {
        return res.status(200).send(true);
    }

    if (req.url.endsWith(`/config`) && req.method === 'GET') {
        const config = {
            port_id: 1,
            refresh_interval: 60000,
            berth_types: ['MEMBER', 'TRANSIENT', 'TEMPORARY_TRANSIENT'],
            berth_statuses: ['FREE', 'OCCUPIED'],
            port_lat_lng: [39.56664, 2.63574],
        };

        return res.status(200).json(config);
    }

    // Handle single berth movements
    if (
        req.url.includes(`stats/movements`) &&
        req.url.includes(`berths`) &&
        req.method === 'GET'
    ) {
        return res.status(200).json(berthMovements);
    }

    if (
        (req.url.endsWith(`movements`) || req.url.includes('movements?')) &&
        req.method === 'GET'
    ) {
        return res.status(200).json(movements);
    }

    if (req.url.includes(`movements/chart`) && req.method === 'GET') {
        return res
            .status(200)
            .json(movementsChartData[req.query.periods || 'HOURS']);
    }

    if (req.url.includes(`/notes`) && req.method === 'GET') {
        return res.status(200).json(notes);
    }

    if (req.url.includes(`nonReturningBoats`) && req.method === 'GET') {
        return res.status(200).json(nonReturningBoats);
    }

    if (req.url.endsWith(`mapstatus`) && req.method === 'GET') {
        return res.status(200).json(mapStatus);
    }

    next();
});

server.use(router);
server.listen(3000, () => console.log('JSON Server is running'));

const movements = {
    in: [
        {
            boat_id: '1',
            boat_name: 'boat name 1',
            boat_license_plate: 'license plate 1',
            boat_length: 10.2,
            boat_beam: 3.5,
            boat_draft: 2.3,
            pier_id: 'pier_id_1',
            pier_name: 'pier name 1',
            berth_id: 'berth_id_1',
            berth_internal_port_id: 'R15001',
            berth_booking_date_in: '20190428T121010Z',
            berth_booking_estimated_date_out: '20190430T121010Z',
            berth_booking_real_date_out: null,
            berth_booking_deposit: 100.5,
        },
        {
            boat_id: '1',
            boat_name: 'boat name 2',
            boat_license_plate: 'license plate 2',
            boat_length: 11.2,
            boat_beam: 3.1,
            boat_draft: 1.3,
            pier_id: 'pier_id_1',
            pier_name: 'pier name 1',
            berth_id: 'berth_id_2',
            berth_internal_port_id: 'R15002',
            berth_booking_date_in: '20190428T123010Z',
            berth_booking_estimated_date_out: '20190510T121010Z',
            berth_booking_real_date_out: null,
            berth_booking_deposit: 201,
        },
        {
            boat_id: '1',
            boat_name: 'boat name 3',
            boat_license_plate: 'license plate 3',
            boat_length: 10.2,
            boat_beam: 3.5,
            boat_draft: 2.3,
            pier_id: 'pier_id_2',
            pier_name: 'pier name 2',
            berth_id: 'berth_id_3',
            berth_internal_port_id: 'R15003',
            berth_booking_date_in: '20190501T121010Z',
            berth_booking_estimated_date_out: '20190515T121010Z',
            berth_booking_real_date_out: null,
            berth_booking_deposit: 60.5,
        },
        {
            boat_id: '1',
            boat_name: 'boat name 4',
            boat_license_plate: 'license plate 4',
            boat_length: 8.2,
            boat_beam: 2.5,
            boat_draft: 1.3,
            pier_id: 'pier_id_2',
            pier_name: 'pier name 2',
            berth_id: 'berth_id_5',
            berth_internal_port_id: 'R15005',
            berth_booking_date_in: '20190428T121010Z',
            berth_booking_estimated_date_out: '20190430T121010Z',
            berth_booking_real_date_out: null,
            berth_booking_deposit: 100.5,
        },
        {
            boat_id: '1',
            boat_name: 'boat name 5',
            boat_license_plate: 'license plate 5',
            boat_length: 4.2,
            boat_beam: 2.5,
            boat_draft: 1.3,
            pier_id: 'pier_id_1',
            pier_name: 'pier name 1',
            berth_id: 'berth_id_15',
            berth_internal_port_id: 'R13015',
            berth_booking_date_in: '20190501T121010Z',
            berth_booking_estimated_date_out: '20190530T121010Z',
            berth_booking_real_date_out: null,
            berth_booking_deposit: 100.5,
        },
        {
            boat_id: '1',
            boat_name: 'boat name 6',
            boat_license_plate: 'license plate 6',
            boat_length: 30.2,
            boat_beam: 6.5,
            boat_draft: 7.3,
            pier_id: 'pier_id_5',
            pier_name: 'pier name 5',
            berth_id: 'berth_id_100',
            berth_internal_port_id: 'R13001',
            berth_booking_date_in: '20190502T121010Z',
            berth_booking_estimated_date_out: '20190430T121010Z',
            berth_booking_real_date_out: null,
            berth_booking_deposit: 1000.5,
        },
    ],
    in_last_week: [
        {
            '20190425': 34,
        },
        {
            '20190426': 20,
        },
        {
            '20190427': 16,
        },
        {
            '20190428': 22,
        },
        {
            '20190429': 26,
        },
        {
            '20190430': 10,
        },
    ],
    out: [
        {
            boat_id: '1',
            boat_name: 'boat name 10',
            boat_license_plate: 'license plate 10',
            boat_length: 12.2,
            boat_beam: 2.5,
            boat_draft: 1.3,
            pier_id: 'pier_id_1',
            pier_name: 'pier name 1',
            berth_id: 'berth_id_102',
            berth_internal_port_id: 'R14004',
            berth_booking_date_in: '20190420T121010Z',
            berth_booking_estimated_date_out: '20190430T121010Z',
            berth_booking_real_date_out: null,
            berth_booking_deposit: 1000.5,
        },
        {
            boat_id: '1',
            boat_name: 'boat name 11',
            boat_license_plate: 'license plate 11',
            boat_length: 5.2,
            boat_beam: 2.5,
            boat_draft: 1.3,
            pier_id: 'pier_id_1',
            pier_name: 'pier name 1',
            berth_id: 'berth_id_103',
            berth_internal_port_id: 'R14003',
            berth_booking_date_in: '20190425T121010Z',
            berth_booking_estimated_date_out: '20190430T101010Z',
            berth_booking_real_date_out: null,
            berth_booking_deposit: 1000.5,
        },
    ],
    out_last_week: [
        {
            '20190425': 23,
        },
        {
            '20190426': 25,
        },
        {
            '20190427': 31,
        },
        {
            '20190428': 15,
        },
        {
            '20190429': 24,
        },
        {
            '20190430': 26,
        },
    ],
};

const berthMovements = [
    {
        date: '20190428T121010Z',
        type: 'DEPARTURE',
        boat_id: '1',
    },
    {
        date: '20190428T121010Z',
        type: 'ARRIVAL',
        boat_id: '2',
    },
    {
        date: '20190428T121010Z',
        type: 'DEPARTURE',
        boat_id: '3',
    },
];

const movementsChartData = {
    HOURS: [
        {
            name: '10H',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 40,
                },
                {
                    name: 'DEPARTURES',
                    value: 36,
                },
            ],
        },
        {
            name: '11H',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 0,
                },
                {
                    name: 'DEPARTURES',
                    value: 45,
                },
            ],
        },
        {
            name: '12H',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 36,
                },
                {
                    name: 'DEPARTURES',
                    value: 34,
                },
            ],
        },
        {
            name: '13H',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 36,
                },
                {
                    name: 'DEPARTURES',
                    value: 34,
                },
            ],
        },
    ],
    DAYS: [
        {
            name: '1/10/2019',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 40,
                },
                {
                    name: 'DEPARTURES',
                    value: 36,
                },
            ],
        },
        {
            name: '2/10/2019',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 0,
                },
                {
                    name: 'DEPARTURES',
                    value: 45,
                },
            ],
        },
        {
            name: '3/10/2019',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 36,
                },
                {
                    name: 'DEPARTURES',
                    value: 34,
                },
            ],
        },
        {
            name: '4/10/2019',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 36,
                },
                {
                    name: 'DEPARTURES',
                    value: 34,
                },
            ],
        },
    ],
    WEEKS: [
        {
            name: '1 > 7/10/2019',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 40,
                },
                {
                    name: 'DEPARTURES',
                    value: 36,
                },
            ],
        },
        {
            name: '8 > 14/10/2019',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 0,
                },
                {
                    name: 'DEPARTURES',
                    value: 45,
                },
            ],
        },
        {
            name: '15 > 21/10/2019',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 36,
                },
                {
                    name: 'DEPARTURES',
                    value: 34,
                },
            ],
        },
        {
            name: '22 > 28/10/2019',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 36,
                },
                {
                    name: 'DEPARTURES',
                    value: 34,
                },
            ],
        },
    ],
    MONTHS: [
        {
            name: 'JANUARY',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 40,
                },
                {
                    name: 'DEPARTURES',
                    value: 36,
                },
            ],
        },
        {
            name: 'FEBRUARY',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 0,
                },
                {
                    name: 'DEPARTURES',
                    value: 45,
                },
            ],
        },
        {
            name: 'MARCH',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 36,
                },
                {
                    name: 'DEPARTURES',
                    value: 34,
                },
            ],
        },
        {
            name: 'APRIL',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 36,
                },
                {
                    name: 'DEPARTURES',
                    value: 34,
                },
            ],
        },
    ],
    YEARS: [
        {
            name: '2015',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 40,
                },
                {
                    name: 'DEPARTURES',
                    value: 36,
                },
            ],
        },
        {
            name: '2016',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 0,
                },
                {
                    name: 'DEPARTURES',
                    value: 45,
                },
            ],
        },
        {
            name: '2017',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 36,
                },
                {
                    name: 'DEPARTURES',
                    value: 34,
                },
            ],
        },
        {
            name: '2018',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 36,
                },
                {
                    name: 'DEPARTURES',
                    value: 34,
                },
            ],
        },
        {
            name: '2019',
            series: [
                {
                    name: 'ARRIVALS',
                    value: 56,
                },
                {
                    name: 'DEPARTURES',
                    value: 24,
                },
            ],
        },
    ],
};

const nonReturningBoats = {
    less_than_3_days: [
        {
            boat_id: '1',
            boat_name: 'boat name 1',
            boat_license_plate: 'license plate 1',
            boat_length: 10.2,
            boat_beam: 3.5,
            boat_draft: 2.3,
            pier_id: 'pier_id_1',
            pier_name: 'pier name 1',
            berth_id: 'berth_id_1',
            berth_internal_port_id: 'internal berth id 1',
            berth_booking_date_in: '20190428T121010Z',
            berth_booking_estimated_date_out: '20190430T121010Z',
            berth_booking_real_date_out: null,
            berth_booking_deposit: 100.5,
            last_departure: '2019-12-03T18:50:49.876Z',
        },
        {
            boat_id: '1',
            boat_name: 'boat name 2',
            boat_license_plate: 'license plate 2',
            boat_length: 11.2,
            boat_beam: 3.1,
            boat_draft: 1.3,
            pier_id: 'pier_id_1',
            pier_name: 'pier name 1',
            berth_id: 'berth_id_2',
            berth_internal_port_id: 'internal berth id 2',
            berth_booking_date_in: '20190428T123010Z',
            berth_booking_estimated_date_out: '20190510T121010Z',
            berth_booking_real_date_out: null,
            berth_booking_deposit: 201,
            last_departure: '2019-12-03T18:50:49.876Z',
        },
        {
            boat_id: '1',
            boat_name: 'boat name 3',
            boat_license_plate: 'license plate 3',
            boat_length: 10.2,
            boat_beam: 3.5,
            boat_draft: 2.3,
            pier_id: 'pier_id_2',
            pier_name: 'pier name 2',
            berth_id: 'berth_id_3',
            berth_internal_port_id: 'internal berth id 3',
            berth_booking_date_in: '20190501T121010Z',
            berth_booking_estimated_date_out: '20190515T121010Z',
            berth_booking_real_date_out: null,
            berth_booking_deposit: 60.5,
            last_departure: '2019-12-03T18:50:49.876Z',
        },
        {
            boat_id: '1',
            boat_name: 'boat name 4',
            boat_license_plate: 'license plate 4',
            boat_length: 8.2,
            boat_beam: 2.5,
            boat_draft: 1.3,
            pier_id: 'pier_id_2',
            pier_name: 'pier name 2',
            berth_id: 'berth_id_5',
            berth_internal_port_id: 'internal berth id 5',
            berth_booking_date_in: '20190428T121010Z',
            berth_booking_estimated_date_out: '2019-12-03T18:50:49.876Z',
            berth_booking_real_date_out: null,
            berth_booking_deposit: 100.5,
            last_departure: '2019-12-03T18:50:49.876Z',
        },
        {
            boat_id: '1',
            boat_name: 'boat name 5',
            boat_license_plate: 'license plate 5',
            boat_length: 4.2,
            boat_beam: 2.5,
            boat_draft: 1.3,
            pier_id: 'pier_id_1',
            pier_name: 'pier name 1',
            berth_id: 'berth_id_15',
            berth_internal_port_id: 'internal berth id 15',
            berth_booking_date_in: '20190501T121010Z',
            berth_booking_estimated_date_out: '20190530T121010Z',
            berth_booking_real_date_out: null,
            berth_booking_deposit: 100.5,
            last_departure: '2019-12-03T18:50:49.876Z',
        },
        {
            boat_id: '1',
            boat_name: 'boat name 6',
            boat_license_plate: 'license plate 6',
            boat_length: 30.2,
            boat_beam: 6.5,
            boat_draft: 7.3,
            pier_id: 'pier_id_5',
            pier_name: 'pier name 5',
            berth_id: 'berth_id_100',
            berth_internal_port_id: 'internal berth id 100',
            berth_booking_date_in: '20190502T121010Z',
            berth_booking_estimated_date_out: '20190430T121010Z',
            berth_booking_real_date_out: null,
            berth_booking_deposit: 1000.5,
            last_departure: '20190430T121010Z',
        },
    ],
    less_than_10_days: [
        {
            boat_id: '1',
            boat_name: 'boat name 10',
            boat_license_plate: 'license plate 10',
            boat_length: 12.2,
            boat_beam: 2.5,
            boat_draft: 1.3,
            pier_id: 'pier_id_1',
            pier_name: 'pier name 1',
            berth_id: 'berth_id_102',
            berth_internal_port_id: 'internal berth id 102',
            berth_booking_date_in: '20190420T121010Z',
            berth_booking_estimated_date_out: '20190430T121010Z',
            berth_booking_real_date_out: null,
            berth_booking_deposit: 1000.5,
            last_departure: '20190430T121010Z',
        },
        {
            boat_id: '1',
            boat_name: 'boat name 11',
            boat_license_plate: 'license plate 11',
            boat_length: 5.2,
            boat_beam: 2.5,
            boat_draft: 1.3,
            pier_id: 'pier_id_1',
            pier_name: 'pier name 1',
            berth_id: 'berth_id_103',
            berth_internal_port_id: 'internal berth id 103',
            berth_booking_date_in: '20190425T121010Z',
            berth_booking_estimated_date_out: '20190430T101010Z',
            berth_booking_real_date_out: null,
            berth_booking_deposit: 1000.5,
            last_departure: '20190430T121010Z',
        },
    ],
};

const notes = [
    {
        id: '1',
        created_at: '2019-11-26T09:55:59.523Z',
        updated_at: '2019-11-26T09:55:59.523Z',
        content: {
            name: 'Barco1',
            last_name: 'Barco1 lastname',
            document_id: '111',
            deposit: {
                delivered: true,
                quantity: 100,
            },
            boat_name: 'Barco1 boat_name',
            boat_license_number: '11111',
            arrival_date: '2019-11-26T09:55:59.523Z',
            estimated_departure_date: '2019-11-30T23:00:00.000Z',
            contact_phone: '666222333',
            notes: 'All very good',
            image: null,
        },
    },
    {
        id: '2',
        created_at: '2019-11-26T09:55:59.523Z',
        updated_at: '2019-11-26T09:55:59.523Z',
        content: {
            name: 'Barco2',
            last_name: 'Barco2 lastname',
            document_id: '111',
            deposit: {
                delivered: true,
                quantity: 100,
            },
            boat_name: 'Barco2 boat_name',
            boat_license_number: '2222',
            arrival_date: '2019-11-26T09:55:59.523Z',
            estimated_departure_date: '2019-11-30T23:00:00.000Z',
            contact_phone: '666222333',
            notes: 'All very good good',
            image: null,
        },
    },
];

const mapStatus = {
    TJIYXli: {
        internal_port_id: 'R15001',
        status: 'FREE',
        last_change: '20190428T081535Z',
    },
    AsIRXv4: {
        internal_port_id: 'R15002',
        status: 'OCCUPIED',
        last_change: '20190428T164018Z',
    },
    _Bb4OiI: {
        internal_port_id: 'R15003',
        status: 'OCCUPIED',
        last_change: '20190325T111015Z',
    },
    gUznB8q: {
        internal_port_id: 'R13001',
        status: 'OCCUPIED',
        last_change: '20190325T111015Z',
    },
    gUfnB3q: {
        internal_port_id: 'R13002',
        status: 'FREE',
        last_change: '20190325T111015Z',
    },
    gUfhBE5q: {
        internal_port_id: 'R13003',
        status: 'OCCUPIED',
        last_change: '20190325T111015Z',
    },
    gMfhWE2p: {
        internal_port_id: 'R13004',
        status: 'OCCUPIED',
        last_change: '20190325T111015Z',
    },
};
