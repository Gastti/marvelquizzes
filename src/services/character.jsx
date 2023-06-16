import { MD5 } from 'crypto-js';
const PUBLIC_KEY = 'b4554371244fe1755ca98aee97a8814f';
const PRIVATE_KEY = 'c8840fc4f515cfe3c3a2db6fe0e0bbc36f9c6c03';
const BASE_URL = 'https://gateway.marvel.com/v1/public';

const generateHash = (timestamp) => {
    const hash = MD5(timestamp + PRIVATE_KEY + PUBLIC_KEY).toString();
    return hash;
};

const ID_CHARACTERS_LIST = [1011334, 1017100, 1009144, 1010699, 1009146, 1016823, 1009148, 1009149, 1010903, 1011266, 1010354, 1010846, 1017851, 1012717, 1011297, 1011031, 1009150, 1011198, 1011175, 1011136, 1011176, 1010870, 1011194, 1011170, 1009240, 1011120, 1010836, 1010755, 1011214, 1009497, 1014990, 1009435, 1010370, 1011324, 1011164, 1011227, 1009567, 1011382, 1011361, 1009151, 1010672, 1010673, 1010905, 1009152, 1016824, 1011684, 1011396, 1011338, 1009153, 1017574, 1010674, 1009346, 1009154, 1011301, 1010802, 1009155, 1010801, 1011208, 1009156, 1011253, 1010866, 1010773, 1017438, 1009158, 1010686, 1009159, 1009160, 1010784, 1011275, 1011012, 1011298, 1010827, 1009740, 1010748, 1009161, 1010718, 1009162, 1010835, 1010336, 1011758, 1009163, 1009164, 1009165, 1015239, 1011766, 1011456, 1009168, 1009596, 1011778, 1009169, 1009170, 1010906, 1011137, 1011354, 1009550, 1009171, 1009172, 1009173, 1011785, 1009174, 1010909, 1010908, 1009176, 1009177, 1009178, 1009179, 1011793, 1009329, 1009489, 1011346, 1010782, 1010829, 1009180, 1011907, 1010325, 1009548, 1011138, 1011296, 1010843, 1009181, 1011262, 1009182, 1011224, 1009183, 1009184, 1017330, 1009185, 1010910, 1010859, 1011809, 1009186, 1009187, 1017838, 1011130, 1010356, 1010687, 1009188, 1009189, 1017296, 1010911, 1011498, 1017109, 1009190, 1010881, 1011349, 1009191, 1009195, 1010830, 1011291, 1011836, 1009197, 1009198, 1009199, 1011132, 1009200, 1009201, 1009202, 1011416, 1011073, 1009203, 1009204, 1010850, 1011113, 1011339, 1011264, 1010688, 1011119, 1010366, 1009205, 1010371, 1009206, 1011236, 1014981, 1009208, 1011090, 1009209, 1014973, 1009167, 1009210, 1009211, 1011038, 1010887, 1009212, 1009213, 1011101, 1009214, 1017317, 1017307, 1011252, 1017472, 1011209, 1009216, 1009217, 1010912, 1009218, 1011139, 1009219, 1011276, 1009220, 1010914, 1017295, 1017327, 1017575, 1010913, 1017105, 1009223, 1017856, 1010915, 1011190, 1011196, 1010338, 1011096, 1009224, 1011095, 1011097, 1011355, 1009225, 1011027, 1011052, 1010143, 1009226, 1011258, 1009688, 1009227, 1010916, 1009261, 1009344, 1011937, 1009478, 1009230, 1009536, 1010813, 1011039, 1011140, 1009231, 1011141, 1009232, 1009233, 1009234, 1010756, 1011015, 1009733, 1011331, 1012019, 1010754, 1011359, 1009237, 1011411, 1011187, 1009238, 1012065, 1011270, 1009239, 1014999, 1010809, 1009241, 1010823, 1011286, 1010676, 1010798, 1009243, 1010917, 1011410, 1009245, 1011407, 1010346, 1009246, 1009247, 1011353, 1011362, 1009249, 1009250, 1011272, 1009251, 1017323, 1011169, 1009252, 1009253, 1009254, 1014991, 1009255, 1011268, 1009244, 1011174, 1009256, 1009257, 1010918, 1017473, 1011385, 1011050, 1009258, 1010774, 1010719, 1011001, 1011333, 1009259, 1009453, 1010776, 1009262, 1017292, 1017312, 1010919, 1011306, 1011367, 1010907, 1009265, 1011387, 1011020, 1009266, 1011016, 1009267, 1010920, 1010341, 1011087, 1009268, 1017316, 1017336, 1017474, 1009269, 1009270, 1011037, 1010890, 1014997, 1009713, 1010717, 1011188, 1011023, 1011071, 1009271, 1009272, 1011107, 1017583, 1017102, 1011142, 1011260, 1009273, 1009274, 1011040, 1010997, 1009275, 1009281, 1011103, 1011206, 1009276, 1010921, 1010689, 1009282, 1011358, 1011500, 1011235, 1009277, 1010330, 1009278, 1009279, 1010879, 1017835, 1011195, 1009280, 1014992, 1017300, 1010677, 1011247, 1009283, 1010735, 1010368, 1015007, 1011322, 1009284, 1009285, 1009286, 1010785, 1010787, 1009396, 1010999, 1011072, 1011060, 1009287, 1010922, 1009288, 1010923, 1010355, 1009290, 1011082, 1011122, 1010701, 1009310, 1009291, 1009292, 1010671, 1011432, 1011313, 1010445, 1011065, 1009293, 1010807, 1011061, 1010771, 1012378, 1009294, 1009295, 1009296, 1011199, 1011317, 1009248, 1009297, 1017110, 1011143, 1009298, 1009299, 1011013, 1011111, 1009301, 1011233, 1009335, 1009302, 1011213, 1009303, 1010868, 1009304, 1014987, 1009305, 1009306, 1011222, 1010880, 1010863, 1010333, 1009470, 1009307, 1009308, 1009309, 1014993, 1011177, 1009229, 1011356, 1009539, 1010980, 1011240, 1012478, 1010799, 1011389, 1010670, 1009377, 1009312, 1011384, 1009313, 1011201, 1010763, 1017324, 1010832, 1012512, 1012513, 1011380, 1009383, 1009315, 1009316, 1011248, 1009556, 1011285, 1009317, 1011098, 1014974, 1010749, 1010925, 1009318, 1017329, 1017833, 1011221, 1009320, 1010720, 1010926, 1011055, 1012571, 1014982, 1009321, 1011256, 1009645, 1011144, 1009322, 1011374, 1010927, 1009324, 1012610, 1010731, 1011076, 1012623, 1010702, 1011041, 1014985, 1010928, 1011435, 1010929, 1009326, 1011420, 1011292, 1009328, 1010743, 1009330, 1011299, 1009331, 1010709, 1009207, 1009619, 1014994, 1011400, 1009332, 1011391, 1009333, 1009334, 1014995, 1011490, 1011091, 1009348, 1010821, 1011185, 1009336, 1011069, 1009339, 1009486, 1011218, 1010816, 1009337, 1009338, 1010808, 1017311, 1011131, 1017108, 1012767, 1011046, 1011482, 1010351, 1009340, 1014996, 1010678, 1011044, 1009341, 1011371, 1009342, 1009343, 1010759, 1011274, 1011300, 1010839, 1010703, 1011442, 1009345, 1011383, 1010930, 1010931, 1009347, 1009349, 1009350, 1017844, 1011428, 1009557, 1010373, 1009351, 1017098, 1017333, 1011118, 1017303, 1011005, 1010721, 1017107, 1009355, 1010343, 1011415, 1010722, 1009356, 1010932, 1011102, 1010675, 1009357, 1009358, 1009359, 1009360, 1009361, 1011246, 1009362, 1010933, 1017475, 1011077, 1010758, 1009529, 1012923, 1011273, 1011089, 1009363, 1009364, 1011063, 1011064, 1011146, 1009365, 1011293, 1011024, 1009366, 1017301, 1010934, 1011379, 1011318, 1009367, 1010888, 1011413, 1016839, 1011412, 1010704, 1009368, 1017320, 1017294, 1017310, 1017326, 1010935, 1017104, 1009371, 1009487, 1009538, 1010844, 1017831, 1011876, 1009372, 1010736, 1010786, 1010766, 1011251, 1011288, 1011259, 1010775, 1010777, 1011343, 1010329, 1010878, 1009597, 1011344, 1009496, 1009327, 1010946, 1009604, 1011404, 1010667, 1009378, 1009373, 1009374, 1011105, 1009375, 1009376, 1011171, 1010812, 1009500, 1009721, 1009196, 1009630, 1009380, 1010938, 1010937, 1011033, 1009381, 1010936, 1009382, 1010772, 1010679, 1011314, 1010760, 1011310, 1011081, 1011193, 1009384, 1014983, 1011357, 1011386, 1009385, 1010752, 1010783, 1010810, 1011250, 1011319, 1009386, 1010893, 1011397, 1011289, 1011116, 1009388, 1010842, 1009389, 1011308, 1009508, 1017476, 1009390, 1010818, 1011147, 1011080, 1011312, 1013133, 1009391, 1011148, 1015017, 1011178, 1011029, 1013163, 1011058, 1009392, 1011327, 1009393, 1011014, 1014977, 1014976, 1009394, 1009395, 1009397, 1011100, 1009398, 1011092, 1009399, 1011403, 1009166, 1011186, 1010340, 1011375, 1014988, 1011421, 1010977, 1009401, 1011408, 1010450, 1009236, 1009402, 1011074, 1011257, 1010337, 1011444, 1010854, 1011036, 1011059, 1009403, 1009404, 1010939, 1011414, 1009405, 1009406, 1010363, 1009407, 1017299, 1010768, 1009408, 1010940, 1011145, 1014980, 1011283, 1009260, 1009409, 1011405, 1010751, 1009215, 1011200, 1017854, 1010896, 1011068, 1011004, 1011320, 1010726, 1017321, 1009418, 1009314, 1010851, 1010805, 1009411, 1009412, 1010352, 1010796, 1010724, 1009509, 1011205, 1009413, 1011053, 1011328, 1010867, 1009414, 1010942, 1009415, 1011135, 1009416, 1009417, 1010944, 1010945, 1010943, 1017477, 1010904, 1011364, 1011085, 1010725, 1009242, 1013479, 1011229, 1009420, 1010811, 1009421, 1011243, 1009422, 1009423, 1011026, 1009424, 1015018, 1011335, 1009735, 1009425, 1011173, 1011263, 1011350, 1009427, 1011002, 1011417, 1009708, 1010993, 1011203, 1010869, 1010367, 1010732, 1009433, 1009434, 1011279, 1010877, 1009677, 1009463, 1010793, 1009436, 1010947, 1009437, 1011305, 1009490, 1009438, 1011399, 1009439, 1011241, 1011099, 1011184, 1009440, 1009441, 1010681, 1009442, 1009443, 1010361, 1011340, 1009444, 1010690, 1011134, 1010871, 1010891, 1010924, 1009530, 1011192, 1010894, 1009445, 1011204, 1013727, 1011424, 1009446, 1009447, 1017318, 1010948, 1011254, 1010682, 1011220, 1009410, 1010941, 1009448, 1009449, 1011019, 1010691, 1009541, 1011370, 1010876, 1009450, 1010331, 1017814, 1009452, 1010949, 1014998, 1009451, 1010362, 1009454, 1010902, 1009455, 1013190, 1009623, 1011008, 1011088, 1009456, 1009457, 1009458, 1009459, 1010950, 1010900, 1009460, 1010347, 1010840, 1014984, 1011244, 1009461, 1009462, 1017824, 1017577, 1011372, 1011210, 1011056, 1010826, 1009464, 1010951, 1010952, 1009465, 1010953, 1010954, 1011129, 1013483, 1009466, 1009468, 1009469, 1014978, 1009547, 1010365, 1011302, 1011422, 1011086, 1010831, 1010815, 1011336, 1010683, 1011271, 1011269, 1011303, 1010685, 1009471, 1017298, 1011007, 1010746, 1010706, 1011282, 1014057, 1010684, 1014063, 1009472, 1011337, 1010349, 1009473, 1011124, 1011409, 1010797, 1009474, 1009475, 1011427, 1010955, 1009325, 1010063, 1009476, 1009477, 1010956, 1017078, 1016837, 1010707, 1009620, 1009480, 1009481, 1017840, 1010882, 1017810, 1014160, 1010757, 1009482, 1011329, 1011123, 1009483, 1011255, 1009484, 1011202, 1009485, 1010957, 1009479, 1014198, 1011228, 1010332, 1011028, 1009488, 1011150, 1010873, 1010708, 1011321, 1010357, 1009492, 1011351, 1017857, 1014267, 1009493, 1009494, 1009495, 1011388, 1010779, 1009491, 1010734, 1011021, 1011419, 1017839, 1011369, 1014318, 1011045, 1010741, 1010886, 1010762, 1011179, 1009498, 1009499, 1009501, 1016840, 1010770, 1011151, 1011152, 1009502, 1011104, 1014989, 1011234, 1010750, 1009503, 1011030, 1014434, 1011153, 1011378, 1009504, 1010958, 1009505, 1010960, 1010959, 1009506, 1009507, 1010961, 1009511, 1009512, 1009510, 1009513, 1010962, 1010865, 1011165, 1009514, 1009515, 1009517, 1017306, 1009519, 1011207, 1009520, 1009522, 1014528, 1009523, 1010778, 1010334, 1011191, 1009387, 1009524, 1010964, 1010963, 1009430, 1009526, 1011280, 1010817, 1009527, 1009528, 1011326, 1010767, 1010838, 1011154, 1010892, 1009531, 1009532, 1009533, 1015000, 1011249, 1009534, 1011238, 1014666, 1011360, 1017099, 1011436, 1011155, 1009535, 1010965, 1010837, 1011390, 1011376, 1011189, 1011330, 1009537, 1009702, 1011401, 1009379, 1015006, 1011348, 1009542, 1009543, 1009544, 1009545, 1010792, 1009235, 1010744, 1017314, 1010769, 1010692, 1009546, 1010967, 1017319, 1010966, 1017478, 1010781, 1011398, 1010344, 1010710, 1011117, 1009549, 1009595, 1009311, 1010747, 1009551, 1009552, 1009553, 1009554, 1010969, 1010970, 1010968, 1009555, 1011325, 1011126, 1011156, 1009558, 1010711, 1009559, 1009560, 1011035, 1009561, 1011048, 1010861, 1011197, 1011426, 1009562, 1010972, 1017308, 1010971, 1010790, 1009563, 1011079, 1009565, 1011230, 1009566, 1011242, 1009581, 1011368, 1009568, 1009569, 1009570, 1011323, 1009571, 1011167, 1009572, 1010345, 1009573, 1010973, 1009574, 1010975, 1010974, 1011406, 1009575, 1009576, 1014979, 1009577, 1015001, 1009578, 1010712, 1009579, 1009228, 1010895, 1009580, 1017111, 1009583, 1011392, 1017331, 1011393, 1015035, 1011168, 1011093, 1011381, 1009582, 1009584, 1011394, 1009585, 1010858, 1010824, 1009586, 1009587, 1009588, 1010848, 1017815, 1010856, 1010339, 1009589, 1009590, 1009591, 1010976, 1009592, 1010864, 1009594, 1010898, 1011265, 1014975, 1010834, 1010745, 1011223, 1017101, 1009598, 1011157, 1009599, 1015002, 1009600, 1011057, 1011070, 1009601, 1010761, 1009602, 1010874, 1009603, 1010845, 1009606, 1010855, 1010693, 1011373, 1009607, 1010705, 1010833, 1011032, 1010694, 1009605, 1011366, 1010727, 1009157, 1009609, 1017603, 1011347, 1011054, 1014873, 1016452, 1014858, 1012200, 1017332, 1011114, 1017305, 1016181, 1012295, 1009610, 1011377, 1011010, 1010795, 1009608, 1010794, 1009614, 1011158, 1010899, 1009616, 1011180, 1009617, 1014905, 1010814, 1010860, 1009618, 1015003, 1011307, 1010733, 1009621, 1010764, 1011084, 1011341, 1011078, 1009622, 1010828, 1010889, 1012230, 1011159, 1009625, 1009615, 1010901, 1010326, 1009626, 1009627, 1009628, 1010327, 1009629, 1010979, 1017309, 1010978, 1011062, 1011051, 1009632, 1011225, 1010791, 1009631, 1011212, 1009635, 1009636, 1010981, 1009637, 1009638, 1015280, 1011022, 1009639, 1011232, 1011160, 1010695, 1011477, 1011172, 1011075, 1011017, 1009640, 1017852, 1009641, 1010982, 1009642, 1009643, 1009644, 1011042, 1009646, 1010753, 1011395, 1011161, 1011149, 1010713, 1011854, 1009647, 1009648, 1011115, 1011896, 1013504, 1011000, 1009650, 1011162, 1009651, 1011034, 1010819, 1011003, 1009652, 1015004, 1011083, 1009653, 1009654, 1010714, 1012080, 1011294, 1010728, 1009655, 1011219, 1010359, 1010715, 1011295, 1014986, 1010998, 1017103, 1011216, 1011215, 1011018, 1009656, 1009657, 1011211, 1011110, 1009658, 1009659, 1009660, 1011112, 1009661, 1011181, 1009662, 1017313, 1010983, 1009664, 1017576, 1017106, 1017315, 1017328, 1017302, 1011025, 1010820, 1010885, 1009666, 1009667, 1009668, 1014812, 1010360, 1011304, 1009669, 1011237, 1009670, 1010857, 1011345, 1011960, 1010669, 1009672, 1009673, 1009674, 1011166, 1009675, 1010328, 1009624, 1011309, 1009676, 1009692, 1010822, 1011978, 1010825, 1009671, 1010335, 1011352, 1011047, 1009678, 1010852, 1009679, 1010369, 1009680, 1011315, 1009681, 1009682, 1009683, 1010358, 1016825, 1010803, 1009684, 1011311, 1011125, 1010847, 1009685, 1009686, 1010862, 1010985, 1010696, 1010984, 1009687, 1010987, 1010988, 1010986, 1009525, 1017841, 1010350, 1011239, 1011182, 1011342, 1010989, 1011365, 1009689, 1011316, 1009690, 1010872, 1011231, 1009691, 1009663, 1010788, 1011128, 1011106, 1009693, 1010353, 1009694, 1011066, 1010324, 1011261, 1009695, 1010666, 1009696, 1010697, 1009697, 1009698, 1011011, 1009699, 1010990, 1010849, 1011267, 1009700, 1009701, 1017322, 1017834, 1017304, 1010991, 1011226, 1009703, 1011121, 1010372, 1009704, 1011287, 1009705, 1010668, 1009706, 1009707, 1010992, 1017853, 1011133, 1009709, 1011402, 1010742, 1009710, 1010765, 1011588, 1009711, 1010348, 1010342, 1009712, 1010853, 1016838, 1011425, 1009714, 1009715, 1010994, 1011067, 1009716, 1009633, 1010680, 1011009, 1010740, 1011043, 1011290, 1011281, 1009717, 1010995, 1010729, 1009718, 1017297, 1017325, 1011006, 1017479, 1009719, 1009720, 1015005, 1010737, 1010884, 1010883, 1009722, 1010804, 1011418, 1009723, 1010738, 1010739, 1009724, 1009725, 1009726, 1011109, 1010875, 1010806, 1009732, 1011094, 1009734, 1009736, 1009737, 1010996, 1011542, 1010698, 1011277, 1009738, 1010841, 1010716, 1011163, 1009739, 1010780, 1011515, 1011127, 1009741, 1011183, 1009742];

export async function fetchCharacters() {
    const timestamp = new Date().getTime().toString();
    const hash = generateHash(timestamp);
    const randomIndex = Math.floor(Math.random() * ID_CHARACTERS_LIST.length);
    const characterId = ID_CHARACTERS_LIST[randomIndex];

    const url = `${BASE_URL}/characters/${characterId}`;
    const params = {
        ts: timestamp,
        apikey: PUBLIC_KEY,
        hash: hash
    };

    const queryParams = new URLSearchParams(params).toString();
    const fullURL = `${url}?${queryParams}`;

    try {
        const response = await fetch(fullURL);
        const data = await response.json();
        const character = data.data.results[0];
        return character;
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
    }

}