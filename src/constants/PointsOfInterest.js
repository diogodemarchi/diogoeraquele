import { useTranslation } from "react-i18next";
import {
  faPlaneDeparture,
  faCity,
  faLandmark,
  faMountain,
  faBuilding,
  faTree,
  faWater,
  faBookOpen,
  faBeer,
  faSun,
  faUmbrellaBeach,
  faCableCar,
  faMountainSun,
  // Add other icons here as needed
} from "@fortawesome/free-solid-svg-icons";

const usePOI = () => {
  const { t } = useTranslation();

  const northAirports = [
    // todo wrong
    {
      name: t("airport_manaus"),
      description: t("airport_manaus_description"),
      position: [-3.013859, -59.971114], // Eduardo Gomes International Airport
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/VF4Fz4mCNYw2V4tQ8",
    },
    {
      // todo wrong
      name: t("airport_brasilia"),
      description: t("airport_brasilia_description"),
      position: [-15.8274504, -47.9336495], // Brasília International Airport
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/3qP7PQjMwJcHTbNr9",
    },
    {
      name: t("airport_recife"),
      description: t("airport_recife_description"),
      position: [-8.124945, -34.918103], // Recife/Guararapes–Gilberto Freyre International Airport
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/SGcKYhzQxZR9BfK27",
    },
    {
      name: t("airport_fortaleza"),
      description: t("airport_fortaleza_description"),
      position: [-3.785181, -38.532716], // Pinto Martins – Fortaleza International Airport
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/xMf9vDwhBc7wx3BCA",
    },
    {
      name: t("airport_salvador"),
      description: t("airport_salvador_description"),
      position: [-12.9069501, -38.3231656], // Deputado Luís Eduardo Magalhães International Airport
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/sUHd1j6n4x6tp5Ek9",
    },
    {
      // todo wrong
      name: t("airport_maceio"),
      description: t("airport_maceio_description"),
      position: [-9.5086141, -35.3581435], // Maceió/Zumbi dos Palmares International Airport
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/QF1uPLmrMs8kpKnp8",
    },
    {
      name: t("airport_natal"),
      description: t("airport_natal_description"),
      position: [-5.7731503, -35.3686754], // São Gonçalo do Amarante–Natal International Airport
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/YAkK6mNyHk6F5Kr99",
    },
    {
      // todo wrong!
      name: t("airport_joao_pessoa"),
      description: t("airport_joao_pessoa_description"),
      position: [-7.129135, -34.891881], // João Pessoa - Castro Pinto International Airport
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/ZD7XyMNTm6UwwDnk7",
    },
  ];
  const southAirports = [
    {
      name: t("airport_nvt"),
      description: t("airport_nvt_description"),
      position: [-26.8792127, -48.6526162],
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/XxWGBcwCub4hUCnb7",
    },
    {
      name: t("airport_cwb"),
      description: t("airport_cwb_description"),
      position: [-25.5314995, -49.176601],
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/SB12EHMycjbDjmKk7",
    },
    {
      name: t("airport_fln"),
      description: t("airport_fln_description"),
      position: [-27.6745466, -48.5487311],
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/PdUmWjRHLar8PujL6",
    },
    {
      name: t("airport_joi"),
      description: t("airport_joi_description"),
      position: [-26.2253962, -48.8052332],
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/38yiE1o5QJDTEYGz6",
    },
    {
      name: t("airport_igu"),
      description: t("airport_igu_description"),
      position: [-25.5977795, -54.4910861],
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/1Bqv7xBJi5FtQ1p67",
    },
  ];
  const southEastAirports = [
    {
      name: t("airport_gru"),
      description: t("airport_gru_description"),
      position: [-23.4269531, -46.4869245],
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/RALBajbsd3qaxPNH8",
    },
    {
      name: t("airport_cgh"),
      description: t("airport_cgh_description"),
      position: [-23.6253951, -46.6630757],
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/45uRkqep8MvVTCmN9",
    },
    {
      name: t("airport_vcp"),
      description: t("airport_vcp_description"),
      position: [-23.00805, -47.1422345],
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/DZ13rq2z9nVdFqKB8",
    },
    {
      name: t("airport_gig"),
      description: t("airport_gig_description"),
      position: [-22.8052698, -43.2592026],
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/8Ft8LMyLBT8ubw3r9",
    },
    {
      name: t("airport_sdu"),
      description: t("airport_sdu_description"),
      position: [-22.9097959, -43.1663911],
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/sCSSMGRZEgLxQcsq7",
    },
    {
      name: t("airport_cgr"),
      description: t("airport_cgr_description"),
      position: [-20.4572735, -54.6713084],
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/fMJuLnXxnptL5MvQA",
    },
    {
      name: t("airport_cgb"),
      description: t("airport_cgb_description"),
      position: [-15.6506042, -56.1230338],
      icon: faPlaneDeparture,
      maps: "https://maps.app.goo.gl/fMJuLnXxnptL5MvQA",
    },
  ];
  const cities = [
    {
      name: t("blumenau"),
      description: t("blumenau_description"),
      position: [-26.9193709, -49.0666534],
      icon: faCity,
      maps: "https://maps.app.goo.gl/c6dtetAN1DEr3ykV9",
    },
    {
      name: t("pomerode"),
      description: t("pomerode_description"),
      position: [-26.7406254, -49.1765044],
      icon: faCity,
      maps: "https://maps.app.goo.gl/9hgZ2qEzVcekxyXbA",
    },
    {
      name: t("rio_dos_cedros"),
      description: t("rio_dos_cedros_description"),
      position: [-26.739327, -49.2745553],
      icon: faCity,
      maps: "https://maps.app.goo.gl/EDHecxb4Zbg4DUaG7",
    },
    {
      name: t("timbo"),
      description: t("timbo_description"),
      position: [-26.8265126, -49.2787384],
      icon: faCity,
      maps: "https://maps.app.goo.gl/P49B8r1ixdX8Dsfc6",
    },
    {
      name: t("foz_do_iguacu"),
      description: t("foz_do_iguacu_description"),
      position: [-25.5333067, -54.5866304],
      icon: faCity,
      maps: "https://maps.app.goo.gl/ZyMiZfdF9dJ9Ebr69",
    },
    {
      name: t("balneario_camboriu"),
      description: t("balneario_camboriu_description"),
      position: [-26.989065, -48.6324179],
      icon: faCity,
      maps: "https://maps.app.goo.gl/bvKGD9XeJnhiXquy5",
    },
    {
      name: t("florianopolis"),
      description: t("florianopolis_description"),
      position: [-27.5980198, -48.5515333],
      icon: faCity,
      maps: "https://maps.app.goo.gl/VBmnzhbWCkKL5WCEA",
    },
    {
      name: t("sao_paulo"),
      description: t("sao_paulo_description"),
      position: [-23.5442388, -46.6673516],
      icon: faCity,
      maps: "https://maps.app.goo.gl/e2kPQyAwhivPyhNdA",
    },
    {
      name: t("rio_de_janeiro"),
      description: t("rio_de_janeiro_description"),
      position: [-22.9726003, -43.1940898],
      icon: faCity,
      maps: "https://maps.app.goo.gl/kKpxGLRNhmpixhds6",
    },
  ];
  const landmarks = [
    {
      name: t("christ_redeemer"),
      description: t("christ_redeemer_description"),
      position: [-22.9519, -43.2105], // Christ the Redeemer
      icon: faLandmark,
      maps: "https://maps.app.goo.gl/YjQGVdWy4PUhFjjTA",
    },
    {
      name: t("palacio_da_alvorada"),
      description: t("palacio_da_alvorada_description"),
      position: [-15.7926168, -47.824705], // Palácio da Alvorada
      icon: faBuilding,
      maps: "https://maps.app.goo.gl/Bt8rzn7E3GPF2dQa9",
    },
    {
      name: t("catedral_sao_paulo"),
      description: t("catedral_sao_paulo_description"),
      position: [-5.1272, -42.8248], // Cathedral of São Pedro
      icon: faLandmark,
      maps: "https://maps.app.goo.gl/Y7TFfF9H7Z5ZnA5W6",
    },
    {
      name: t("landmark_igreja_sao_francisco"),
      description: t("landmark_igreja_sao_francisco_description"),
      position: [-9.9286, -44.2095], // Igreja de São Francisco
      icon: faLandmark,
      maps: "https://maps.app.goo.gl/PdFbSC8U8ZaWTuUK6",
    },
    {
      name: t("landmark_catedral_de_petrópolis"),
      description: t("landmark_catedral_de_petrópolis_description"),
      position: [-22.5038, -43.1754], // Cathedral of Petrópolis
      icon: faLandmark,
      maps: "https://maps.app.goo.gl/HcLGuxqAdg8uUQ9V7",
    },
  ];

  const activities = [
    {
      name: t("rio_bonito_dam"),
      description: t("rio_bonito_dam_description"),
      position: [-26.6071156, -49.3413628],
      icon: faWater,
      color: "text-blue-600",
      maps: "https://maps.app.goo.gl/UNAhN7RaJKZP9jAW8",
    },
    {
      name: t("pinhal_dam"),
      description: t("pinhal_dam_description"),
      position: [-26.6142982, -49.4087885],
      icon: faWater,
      color: "text-blue-600",
      maps: "https://maps.app.goo.gl/pNCBVGgipY2t8J6Y7",
    },
    {
      name: t("landmark_sugarloaf_mountain"),
      description: t("landmark_sugarloaf_mountain_description"),
      position: [-22.9486, -43.1566], // Sugarloaf Mountain
      icon: faCableCar,
      maps: "https://maps.app.goo.gl/VbGxQ8Py2yZn12T69",
    },
  ];

  const naturePlaces = [
    {
      name: t("landmark_amazon_rainforest"),
      description: t("landmark_amazon_rainforest_description"),
      position: [-3.4653, -62.2159], // Amazon Rainforest
      icon: faTree,
      maps: "https://maps.app.goo.gl/QdFCPwH5f53jsvGTA",
    },
    {
      name: t("landmark_lençois_maranhenses"),
      description: t("landmark_lençois_maranhenses_description"),
      position: [-2.5117, -43.1288], // Lençóis Maranhenses National Park
      icon: faTree,
      maps: "https://maps.app.goo.gl/fTAZcKZJm2WGoA9E8",
    },
    {
      name: t("landmark_pantanal"),
      description: t("landmark_pantanal_description"),
      position: [-16.4245, -56.8833], // Pantanal
      icon: faTree,
      maps: "https://maps.app.goo.gl/h3MfjX59iMYWFnMg7",
    },
    {
      name: t("landmark_iguazu_falls"),
      description: t("landmark_iguazu_falls_description"),
      position: [-25.6953, -54.4367], // Iguazu Falls
      icon: faWater,
      maps: "https://maps.app.goo.gl/z5FZ5gZ7iS4R1v9F6",
    },
    {
      name: t("landmark_serra_gaucha"),
      description: t("landmark_serra_gaucha_description"),
      position: [-29.3751, -50.9969], // Serra Gaúcha
      icon: faMountainSun,
      maps: "https://maps.app.goo.gl/6GRyYMiG7oSyyCc27",
    },
    {
      name: t("landmark_jardim_botanico"),
      description: t("landmark_jardim_botanico_description"),
      position: [-30.0265, -51.2287], // Jardim Botânico (Botanical Garden) of Porto Alegre
      icon: faTree,
      maps: "https://maps.app.goo.gl/hcEzbuH5RMso9XfS8",
    },
    {
      name: t("landmark_parque_vila_germanica"),
      description: t("landmark_parque_vila_germanica_description"),
      position: [-26.9173, -49.0677], // Parque Vila Germânica
      icon: faBeer,
      maps: "https://maps.app.goo.gl/x2U5oUGyDucnC5cG6",
      color: "text-yellow-600",
    },
    {
      name: t("campos_do_jordao"),
      description: t("campos_do_jordao_description"),
      position: [-22.7394, -45.5926], // Campos do Jordão (considered a mountain destination)
      icon: faMountain,
      maps: "https://maps.app.goo.gl/GeGdV3NacZFM6xD88",
    },
  ];

  const beaches = [
    {
      name: t("fernando_de_noronha"),
      description: t("fernando_de_noronha_description"),
      position: [-30.0612, -51.1757], // Fortress of Nossa Senhora dos Remédios
      icon: faUmbrellaBeach,
      maps: "https://maps.app.goo.gl/AzGGZAPnshwEvsWe6",
    },
    {
      name: t("beach_joaquina"),
      description: t("beach_joaquina_description"),
      position: [-27.6282, -48.4402], // Praia da Joaquina
      icon: faUmbrellaBeach,
      maps: "https://maps.app.goo.gl/s7fPYXc8yTWnQ9MN6",
    },
  ];

  return {
    poi: {
      southAirports,
      southEastAirports,
      northAirports,
      cities,
      landmarks,
      activities,
      naturePlaces,
      beaches,
    },
  };
};

export default usePOI;
