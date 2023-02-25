'use strict';
const moment = require('moment');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bank_accounts', [
      {
          bank_name: "BANK BRI",
          bank_code: "002",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK EKSPOR INDONESIA",
          bank_code: "003",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK MANDIRI",
          bank_code: "008",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK BNI",
          bank_code: "009",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK BNI SYARIAH",
          bank_code: "427",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK DANAMON",
          bank_code: "011",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "PERMATA BANK",
          bank_code: "013",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK BCA",
          bank_code: "014",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK BII",
          bank_code: "016",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK PANIN",
          bank_code: "019",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK ARTA NIAGA KENCANA",
          bank_code: "020",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK NIAGA",
          bank_code: "022",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK BUANA IND",
          bank_code: "023",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK LIPPO",
          bank_code: "026",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK NISP",
          bank_code: "028",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "AMERICAN EXPRESS BANK LTD",
          bank_code: "030",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "CITIBANK N.A.",
          bank_code: "031",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "JP. MORGAN CHASE BANK, N.A.",
          bank_code: "032",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK OF AMERICA, N.A",
          bank_code: "033",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "ING INDONESIA BANK",
          bank_code: "034",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK MULTICOR TBK.",
          bank_code: "036",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK ARTHA GRAHA",
          bank_code: "037",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK CREDIT AGRICOLE INDOSUEZ",
          bank_code: "039",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "THE BANGKOK BANK COMP. LTD",
          bank_code: "040",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "THE HONGKONG & SHANGHAI B.C.",
          bank_code: "041",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "THE BANK OF TOKYO MITSUBISHI UFJ LTD",
          bank_code: "042",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK SUMITOMO MITSUI INDONESIA",
          bank_code: "045",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK DBS INDONESIA",
          bank_code: "046",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK RESONA PERDANIA",
          bank_code: "047",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK MIZUHO INDONESIA",
          bank_code: "048",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "STANDARD CHARTERED BANK",
          bank_code: "050",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK ABN AMRO",
          bank_code: "052",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK KEPPEL TATLEE BUANA",
          bank_code: "053",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK CAPITAL INDONESIA, TBK.",
          bank_code: "054",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK BNP PARIBAS INDONESIA",
          bank_code: "057",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK UOB INDONESIA",
          bank_code: "058",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "KOREA EXCHANGE BANK DANAMON",
          bank_code: "059",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "RABOBANK INTERNASIONAL INDONESIA",
          bank_code: "060",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "ANZ PANIN BANK",
          bank_code: "061",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "DEUTSCHE BANK AG.",
          bank_code: "067",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK WOORI INDONESIA",
          bank_code: "068",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK OF CHINA LIMITED",
          bank_code: "069",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK BUMI ARTA",
          bank_code: "076",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK EKONOMI",
          bank_code: "087",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK ANTARDAERAH",
          bank_code: "088",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK HAGA",
          bank_code: "089",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK IFI",
          bank_code: "093",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK CENTURY, TBK.",
          bank_code: "095",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK MAYAPADA",
          bank_code: "097",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK JABAR",
          bank_code: "110",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK DKI",
          bank_code: "111",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BPD DIY",
          bank_code: "112",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK JATENG",
          bank_code: "113",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK JATIM",
          bank_code: "114",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BPD JAMBI",
          bank_code: "115",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BPD ACEH",
          bank_code: "116",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK SUMUT",
          bank_code: "117",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK NAGARI",
          bank_code: "118",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK RIAU",
          bank_code: "119",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK SUMSEL",
          bank_code: "120",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK LAMPUNG",
          bank_code: "121",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BPD KALSEL",
          bank_code: "122",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BPD KALIMANTAN BARAT",
          bank_code: "123",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BPD KALTIM",
          bank_code: "124",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BPD KALTENG",
          bank_code: "125",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BPD SULSEL",
          bank_code: "126",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK SULUT",
          bank_code: "127",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BPD NTB",
          bank_code: "128",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BPD BALI",
          bank_code: "129",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK NTT",
          bank_code: "130",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK MALUKU",
          bank_code: "131",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BPD PAPUA",
          bank_code: "132",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK BENGKULU",
          bank_code: "133",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BPD SULAWESI TENGAH",
          bank_code: "134",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK SULTRA",
          bank_code: "135",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK NUSANTARA PARAHYANGAN",
          bank_code: "145",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK SWADESI",
          bank_code: "146",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK MUAMALAT",
          bank_code: "147",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK MESTIKA",
          bank_code: "151",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK METRO EXPRESS",
          bank_code: "152",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK SHINTA INDONESIA",
          bank_code: "153",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK MASPION",
          bank_code: "157",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK HAGAKITA",
          bank_code: "159",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK GANESHA",
          bank_code: "161",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK WINDU KENTJANA",
          bank_code: "162",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "HALIM INDONESIA BANK",
          bank_code: "164",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK HARMONI INTERNATIONAL",
          bank_code: "166",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK KESAWAN",
          bank_code: "167",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK TABUNGAN NEGARA (PERSERO)",
          bank_code: "200",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK HIMPUNAN SAUDARA 1906, TBK .",
          bank_code: "212",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK TABUNGAN PENSIUNAN NASIONAL",
          bank_code: "213",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK SWAGUNA",
          bank_code: "405",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK JASA ARTA",
          bank_code: "422",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK MEGA",
          bank_code: "426",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK JASA JAKARTA",
          bank_code: "427",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK BUKOPIN",
          bank_code: "441",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK SYARIAH MANDIRI",
          bank_code: "451",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK BISNIS INTERNASIONAL",
          bank_code: "459",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK SRI PARTHA",
          bank_code: "466",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK JASA JAKARTA",
          bank_code: "472",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK BINTANG MANUNGGAL",
          bank_code: "484",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK BUMIPUTERA",
          bank_code: "485",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK YUDHA BHAKTI",
          bank_code: "490",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK MITRANIAGA",
          bank_code: "491",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK AGRO NIAGA",
          bank_code: "494",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK INDOMONEX",
          bank_code: "498",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK ROYAL INDONESIA",
          bank_code: "501",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK ALFINDO",
          bank_code: "503",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK SYARIAH MEGA",
          bank_code: "506",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK INA PERDANA",
          bank_code: "513",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK HARFA",
          bank_code: "517",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "PRIMA MASTER BANK",
          bank_code: "520",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK PERSYARIKATAN INDONESIA",
          bank_code: "521",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK AKITA",
          bank_code: "525",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "LIMAN INTERNATIONAL BANK",
          bank_code: "526",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "ANGLOMAS INTERNASIONAL BANK",
          bank_code: "531",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK DIPO INTERNATIONAL",
          bank_code: "523",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK KESEJAHTERAAN EKONOMI",
          bank_code: "535",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK UIB",
          bank_code: "536",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK ARTOS IND",
          bank_code: "542",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK PURBA DANARTA",
          bank_code: "547",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK MULTI ARTA SENTOSA",
          bank_code: "548",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK MAYORA",
          bank_code: "553",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK INDEX SELINDO",
          bank_code: "555",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK VICTORIA INTERNATIONAL",
          bank_code: "566",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK EKSEKUTIF",
          bank_code: "558",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "CENTRATAMA NASIONAL BANK",
          bank_code: "559",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK FAMA INTERNASIONAL",
          bank_code: "562",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK SINAR HARAPAN BALI",
          bank_code: "564",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK HARDA",
          bank_code: "567",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK FINCONESIA",
          bank_code: "945",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK MERINCORP",
          bank_code: "946",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK MAYBANK INDOCORP",
          bank_code: "947",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK OCBC – INDONESIA",
          bank_code: "948",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK CHINA TRUST INDONESIA",
          bank_code: "949",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK COMMONWEALTH",
          bank_code: "950",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BANK BJB SYARIAH",
          bank_code: "425",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "BPR KS (KARYAJATNIKA SEDAYA)",
          bank_code: "688",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "INDOSAT DOMPETKU",
          bank_code: "789",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "TELKOMSEL TCASH",
          bank_code: "911",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      },
      {
          bank_name: "LINKAJA",
          bank_code: "911",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bank_accounts', null, {});
  }
};
