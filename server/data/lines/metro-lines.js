import { metroStationData } from "../metro-stations.js";
import { metroLinesColor } from "../metro-util.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function readJsonArrayFile(filename) {
  const filePath = path.join(__dirname, filename);

  try {
    const content = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(content);
    if (!Array.isArray(data)) {
      throw new Error("JSON data is not an array");
    }
    return data;
  } catch (err) {
    return `Error reading or parsing file: ${err.message}`;
  }
}

export const metroLines = [
  {
    name: "Delhi Metro Red Line",
    id: 1,
    fs: "red-line.json",
    color: metroLinesColor.Red,
    stations: [
      metroStationData.Rithala_Red,
      metroStationData.RohiniWest_Red,
      metroStationData.RohiniEast_Red,
      metroStationData.Pitampura_Red,
      metroStationData.KohatEnclave_Red,
      metroStationData.NetajiSubhashPlace_Red,
      metroStationData.KeshavPuram_Red,
      metroStationData.KanhaiyaNagar_Red,
      metroStationData.Inderlok_Red,
      metroStationData.ShastriNagar_Red,
      metroStationData.PratapNagar_Red,
      metroStationData.Pulbangash_Red,
      metroStationData.TisHazari_Red,
      metroStationData.KashmereGate_Red,
      metroStationData.ShastriPark_Red,
      metroStationData.Seelampur_Red,
      metroStationData.Welcome_Red,
      metroStationData.Shahdara_Red,
      metroStationData.MansarovarPark_Red,
      metroStationData.Jhilmil_Red,
      metroStationData.DilshadGarden_Red,
      metroStationData.ShaheedNagar_Red,
      metroStationData.RajBagh_Red,
      metroStationData.MajorMohanSharma_Red,
      metroStationData.ShyamPark_Red,
      metroStationData.MohanNagar_Red,
      metroStationData.Arthala_Red,
      metroStationData.HindonRiver_Red,
      metroStationData.ShaheedSthal_Red,
    ],
    start: metroStationData.Rithala_Red,
    end: metroStationData.ShaheedSthal_Red,
  },
  {
    name: "Delhi Metro Yellow Line",
    id: 2,
    fs: "yellow-line.json",
    color: metroLinesColor.Yellow,
    stations: [
      metroStationData.SamaypurBadli_Yellow,
      metroStationData.RohiniSector1819_Yellow,
      metroStationData.HaiderpurBadliMor_Yellow,
      metroStationData.Jahangirpuri_Yellow,
      metroStationData.AdarshNagar_Yellow,
      metroStationData.Azadpur_Yellow,
      metroStationData.ModelTown_Yellow,
      metroStationData.GTBNagar_Yellow,
      metroStationData.VishwaVidyalaya_Yellow,
      metroStationData.VidhanSabha_Yellow,
      metroStationData.CivilLines_Yellow,
      metroStationData.KashmereGate_Yellow,
      metroStationData.ChandniChowk_Yellow,
      metroStationData.ChawriBazar_Yellow,
      metroStationData.NewDelhi_Yellow,
      metroStationData.RajivChowk_Yellow,
      metroStationData.PatelChowk_Yellow,
      metroStationData.CentralSecretariat_Yellow,
      metroStationData.UdyogBhawan_Yellow,
      metroStationData.LokKalyanMarg_Yellow,
      metroStationData.JorBagh_Yellow,
      metroStationData.INA_Yellow,
      metroStationData.AIIMS_Yellow,
      metroStationData.GreenPark_Yellow,
      metroStationData.HauzKhas_Yellow,
      metroStationData.MalviyaNagar_Yellow,
      metroStationData.Saket_Yellow,
      metroStationData.QutubMinar_Yellow,
      metroStationData.Chhatarpur_Yellow,
      metroStationData.Sultanpur_Yellow,
      metroStationData.Ghitorni_Yellow,
      metroStationData.ArjanGarh_Yellow,
      metroStationData.GuruDronacharya_Yellow,
      metroStationData.Sikandarpur_Yellow,
      metroStationData.MGRoad_Yellow,
      metroStationData.IFFCOChowk_Yellow,
      metroStationData.HUDACityCentre_Yellow,
    ],
    start: metroStationData.SamaypurBadli_Yellow,
    end: metroStationData.HUDACityCentre_Yellow,
  },
  {
    name: "Delhi Metro Magenta Line",
    id: 3,
    fs: "magenta-line.json",
    color: metroLinesColor.Magenta,
    stations: [
      metroStationData.janakpuriWest_Magenta,
      metroStationData.dabriMorJanakpuriSouth_Magenta,
      metroStationData.dashrathpuri_Magenta,
      metroStationData.palam_Magenta,
      metroStationData.sadarBazaarCantonment_Magenta,
      metroStationData.terminal1IgiAirport_Magenta,
      metroStationData.shankarVihar_Magenta,
      metroStationData.vasantVihar_Magenta,
      metroStationData.munirka_Magenta,
      metroStationData.rkPuram_Magenta,
      metroStationData.iitDelhi_Magenta,
      metroStationData.hauzKhas_Magenta,
      metroStationData.panchsheelPark_Magenta,
      metroStationData.chiragDelhi_Magenta,
      metroStationData.greaterKailash_Magenta,
      metroStationData.nehruEnclave_Magenta,
      metroStationData.kalkajiMandir_Magenta,
      metroStationData.okhlaNsic_Magenta,
      metroStationData.sukhdevVihar_Magenta,
      metroStationData.jamiaMilliaIslamia_Magenta,
      metroStationData.okhlaVihar_Magenta,
      metroStationData.jasolaViharShaheenBagh_Magenta,
      metroStationData.kalindiKunj_Magenta,
      metroStationData.okhlaBirdSanctuary_Magenta,
      metroStationData.botanicalGarden_Magenta,
    ],
    start: metroStationData.janakpuriWest_Magenta,
    end: metroStationData.botanicalGarden_Magenta,
  },
  {
    name: "Delhi Metro Violet Line",
    id: 4,
    fs: "violet-line.json",
    color: metroLinesColor.Violet,
    stations: [
      metroStationData.kashmereGate_Violet,
      metroStationData.lalQuila_Violet,
      metroStationData.jamaMasjid_Violet,
      metroStationData.delhiGate_Violet,
      metroStationData.ito_Violet,
      metroStationData.mandiHouse_Violet,
      metroStationData.janpath_Violet,
      metroStationData.centralSecretariat_Violet,
      metroStationData.khanMarket_Violet,
      metroStationData.jlNStadium_Violet,
      metroStationData.jangiHouse_Violet,
      metroStationData.lajpatNagar_Violet,
      metroStationData.moolchand_Violet,
      metroStationData.kailashColony_Violet,
      metroStationData.nehruPlace_Violet,
      metroStationData.kalkajiMandir_Violet,
      metroStationData.govindpuri_Violet,
      metroStationData.harkeshNagarOkhla_Violet,
      metroStationData.jasolaApollo_Violet,
      metroStationData.saritaVihar_Violet,
      metroStationData.mohanEstate_Violet,
      metroStationData.tughlakabad_Violet,
      metroStationData.badarpurBorder_Violet,
      metroStationData.sarai_Violet,
      metroStationData.nhpcChowk_Violet,
      metroStationData.meenakshiPublicSchool_Violet,
      metroStationData.sector28_Violet,
      metroStationData.badkhalMor_Violet,
      metroStationData.oldFaridabad_Violet,
      metroStationData.neelamChowkAjronda_Violet,
      metroStationData.bataChowk_Violet,
      metroStationData.escortsMujesar_Violet,
      metroStationData.santSurdasSihi_Violet,
      metroStationData.rasaulpur_Violet,
    ],
    start: metroStationData.kashmereGate_Violet,
    end: metroStationData.rasaulpur_Violet,
  },
  {
    name: "Delhi Metro Blue Line",
    id: 5,
    fs: "blue-line.json",
    color: metroLinesColor.Blue,
    stations: [
      metroStationData.DwarkaSector21,
      metroStationData.DwarkaSector8,
      metroStationData.DwarkaSector9,
      metroStationData.DwarkaSector10,
      metroStationData.DwarkaSector11,
      metroStationData.DwarkaSector12,
      metroStationData.DwarkaSector13,
      metroStationData.DwarkaSector14,
      metroStationData.Dwarka,
      metroStationData.DwarkaMor,
      metroStationData.Nawada,
      metroStationData.UttamNagarWest,
      metroStationData.UttamNagarEast,
      metroStationData.JanakpuriWest,
      metroStationData.JanakpuriEast,
      metroStationData.TilakNagar,
      metroStationData.SubhashNagar,
      metroStationData.TagoreGarden,
      metroStationData.RajouriGarden,
      metroStationData.RameshNagar,
      metroStationData.MotiNagar,
      metroStationData.KirtiNagar,
      metroStationData.Shadipur,
      metroStationData.PatelNagar,
      metroStationData.RajendraPlace,
      metroStationData.KarolBagh,
      metroStationData.Jhandewalan,
      metroStationData.RKAshramMarg,
      metroStationData.RajivChowk,
      metroStationData.BarakhambaRd,
      metroStationData.MandiHouse,
      metroStationData.SupremeCourt,
      metroStationData.Indraprastha,
      metroStationData.YamunaBank,
      metroStationData.Akshardham,
      metroStationData.MayurViharI,
      metroStationData.MayurViharExt,
      metroStationData.NewAshokNgr,
      metroStationData.NoidaSector15,
      metroStationData.NoidaSector16,
      metroStationData.NoidaSector18,
      metroStationData.BotanicalGarden,
      metroStationData.GolfCourse,
      metroStationData.NoidaCityCtr,
      metroStationData.LaxmiNagar,
      metroStationData.NirmanVihar,
      metroStationData.PreetVihar,
      metroStationData.Karkarduma,
      metroStationData.AnandVihar,
      metroStationData.Kaushambi,
      metroStationData.Vaishali,
    ],
    start: metroStationData.DwarkaSector21,
    end: metroStationData.NoidaCityCtr,
  },
  {
    name: "Delhi Metro Pink Line",
    id: 6,
    fs: "pink-line.json",
    color: metroLinesColor.Pink,
    stations: [
      metroStationData.majlisPark_Pink,
      metroStationData.azadpur_Pink,
      metroStationData.shalimarBagh_Pink,
      metroStationData.netajiSubhashPlace_Pink,
      metroStationData.shakurpur_Pink,
      metroStationData.punjabiBaghWest_Pink,
      metroStationData.esiBasaidarapur_Pink,
      metroStationData.rajouriGarden_Pink,
      metroStationData.mayapuri_Pink,
      metroStationData.narainaVihar_Pink,
      metroStationData.delhiCantonment_Pink,
      metroStationData.durgabaiDeshmukhSouthCampus_Pink,
      metroStationData.sirMVishweshwaraiahMotiBagh_Pink,
      metroStationData.bhikajiCamaPlace_Pink,
      metroStationData.sarojiniNagar_Pink,
      metroStationData.dilliHaatIna_Pink,
      metroStationData.southExtension_Pink,
      metroStationData.lajpatNagar_Pink,
      metroStationData.vinobapuri_Pink,
      metroStationData.ashram_Pink,
      metroStationData.saraiKaleKhanNizamuddin_Pink,
      metroStationData.mayurViharI_Pink,
      metroStationData.mayurViharPocketI_Pink,
      metroStationData.trilokpuriSanjayLake_Pink,
      metroStationData.eastVinodNagarMayurViharII_Pink,
      metroStationData.mandawaliWestVinodNagar_Pink,
      metroStationData.ipExtension_Pink,
      metroStationData.anandVihar_Pink,
      metroStationData.karkarduma_Pink,
      metroStationData.karkardumaCourt_Pink,
      metroStationData.krishnaNagar_Pink,
      metroStationData.eastAzadNagar_Pink,
      metroStationData.welcome_Pink,
      metroStationData.jaffrabad_Pink,
      metroStationData.maujpurBabarpur_Pink,
      metroStationData.gokulpuri_Pink,
      metroStationData.johriEnclave_Pink,
      metroStationData.shivVihar_Pink,
    ],
    start: metroStationData.majlisPark_Pink,
    end: metroStationData.shivVihar_Pink,
  },
  {
    name: "Delhi Metro Orange Line",
    id: 7,
    fs: "orange-line.json",
    color: metroLinesColor.Orange,
    stations: [
      metroStationData.newDelhi_Orange,
      metroStationData.shivajiStadium_Orange,
      metroStationData.dhaulaKuan_Orange,
      metroStationData.delhiAerocity_Orange,
      metroStationData.igiAirport_Orange,
      metroStationData.dwarkaSector21_Orange,
      metroStationData.yashobhoomiDwarkaSector25_Orange,
    ],
    start: metroStationData.newDelhi_Orange,
    end: metroStationData.yashobhoomiDwarkaSector25_Orange,
  },
];
