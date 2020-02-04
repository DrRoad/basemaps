import { EPSG } from '@basemaps/shared';
import { MosaicCog } from '../../tiff.mosaic';

MosaicCog.create({
    id: '01E06HS1W0G3BE687A5RS49K3M',
    name: 'taranaki_rural_2016-17_0-3m',
    projection: EPSG.Wgs84,

    minZoom: 13,
    priority: 100,
    year: 2016,
    resolution: 300,
    quadKeys: [
        '3113323113',
        '3113323131',
        '3113332002',
        '3113332020',
        '31133231112',
        '31133231113',
        '31133231121',
        '31133231122',
        '31133231123',
        '31133231301',
        '31133302223',
        '31133302232',
        '31133320001',
        '31133320002',
        '31133320003',
        '31133320010',
        '31133320012',
        '31133320030',
        '31133320032',
        '31133320210',
        '31133320212',
        '31133320220',
        '31133320221',
        '31133320230',
        '311332311033',
        '311332311201',
        '311332311203',
        '311332313001',
        '311332313003',
        '311332313030',
        '311332313031',
        '311332313033',
        '311332313311',
        '311333200001',
        '311333200002',
        '311333200003',
        '311333200130',
        '311333200132',
        '311333200133',
        '311333200310',
        '311333200311',
        '311333200312',
        '311333200330',
        '311333202110',
        '311333202112',
        '311333202130',
        '311333202131',
        '311333202132',
        '311333202220',
        '311333202221',
        '311333202230',
        '311333202231',
        '311333202233',
        '311333202310',
        '311333202311',
        '311333202312',
        '311333202320',
        '311333202321',
        '311333202322',
    ],
});
