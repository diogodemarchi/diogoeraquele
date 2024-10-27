import { useTranslation } from "react-i18next";
import {
  faPlaneDeparture,
  faCity,
  faLandmark,
  faMountain,
  faBuilding,
  faTree,
  faWater,
  faBeer,
  faUmbrellaBeach,
  faCableCar,
  faMountainSun,
  faWaterLadder,
  faUtensils,
  faFish,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";

const usePOI = () => {
  const { t } = useTranslation();

  const northAirports = [
    {
      name: "airport_manaus",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+de+Manaus+-+Eduardo+Gomes/@-3.0318168,-60.0486515,17z/data=!3m1!4b1!4m6!3m5!1s0x926c10c9f969b659:0x63e9173e40353697!8m2!3d-3.0318168!4d-60.0460766!16zL20vMDR3dzN2?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_brasilia",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+de+Bras%C3%ADlia+-+Presidente+Juscelino+Kubitschek/@-15.8706905,-47.9219233,17z/data=!3m1!4b1!4m6!3m5!1s0x935a2582bb6d2b43:0xbeebe30930ee8750!8m2!3d-15.8706905!4d-47.9193484!16zL20vMDR3dzVr?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_recife",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+do+Recife%2FGuararapes+-+Gilberto+Freyre/@-8.1287392,-34.9284275,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab1e310230b959:0x6bcba1dcbb220871!8m2!3d-8.1287392!4d-34.9258526!16zL20vMDd0Z2Q2?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_fortaleza",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+de+Fortaleza+-+Pinto+Martins+(FOR)/@-3.7787914,-38.5431289,17z/data=!3m1!4b1!4m6!3m5!1s0x7c74ec17dbd721b:0xd74cb694436d615a!8m2!3d-3.7787914!4d-38.540554!16zL20vMDd3cjZu?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_salvador",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+de+Salvador+Lu%C3%ADs+Eduardo+Magalh%C3%A3es/@-12.9161806,-38.3390646,17z/data=!3m1!4b1!4m6!3m5!1s0x7161625d209fc53:0x86ba3d30122b8d76!8m2!3d-12.9161806!4d-38.3341937!16zL20vMDRydHo3?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_maceio",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+de+Macei%C3%B3+-+Zumbi+dos+Palmares+-+SBMO%2FMCZ/@-9.5118603,-35.7957577,17z/data=!3m1!4b1!4m6!3m5!1s0x701364e4d0e2d31:0xcdb6032e48716fc5!8m2!3d-9.5118603!4d-35.7931828!16s%2Fm%2F027c_hy?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_natal",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+de+Natal/@-5.7688818,-35.3686469,17z/data=!3m1!4b1!4m6!3m5!1s0x7b3ad7474c23143:0x75796a15251db180!8m2!3d-5.7688818!4d-35.366072!16s%2Fg%2F1211p8g2?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_joao_pessoa",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+de+Jo%C3%A3o+Pessoa+-+Presidente+Castro+Pinto/@-7.1460091,-34.9513513,17z/data=!3m1!4b1!4m6!3m5!1s0x7ace8d3174243cb:0x1afd929845f8222e!8m2!3d-7.1460091!4d-34.9487764!16s%2Fm%2F0404wqp?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
  ];
  const southAirports = [
    {
      name: "airport_nvt",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+de+Navegantes/@-26.8792127,-48.6526162,17z/data=!3m1!4b1!4m6!3m5!1s0x94d8cc31b0a10491:0xd9e5b1b9c03286f1!8m2!3d-26.8792127!4d-48.6500413!16s%2Fm%2F0404wjw?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_cwb",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+de+Curitiba+-+Afonso+Pena/@-25.5314995,-49.176601,17z/data=!3m1!4b1!4m6!3m5!1s0x94dcf0cd7067d971:0x22badb345314e9e2!8m2!3d-25.5314995!4d-49.1740261!16zL20vMDRzZ2dy?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_fln",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+de+Florian%C3%B3polis+-+Herc%C3%ADlio+Luz/@-27.6745466,-48.5487311,17z/data=!3m1!4b1!4m6!3m5!1s0x95273a0c515d75f7:0xa78ef5ed13a752e5!8m2!3d-27.6745466!4d-48.5461562!16zL20vMGN6dHNs?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_joi",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+de+Joinville+(JOI)+-+Lauro+Carneiro+de+Loyola/@-26.2253962,-48.8052332,17z/data=!3m1!4b1!4m6!3m5!1s0x94deae80f6c1bb5b:0xbf9a0cbe77a5748f!8m2!3d-26.2253962!4d-48.8026583!16zL20vMGNsODlr?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_igu",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+de+Foz+do+Igua%C3%A7u%2FCataratas/@-25.5977795,-54.4910861,17z/data=!3m1!4b1!4m6!3m5!1s0x94f690f505555555:0xcf87e0b9bf1a020f!8m2!3d-25.5977795!4d-54.4885112!16zL20vMDRudnh4?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
  ];
  const southEastAirports = [
    {
      name: "airport_gru",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+de+S%C3%A3o+Paulo%2FGuarulhos%E2%80%93Governador+Andr%C3%A9+Franco+Montoro/@-23.4269531,-46.4869245,16z/data=!3m1!4b1!4m6!3m5!1s0x94ce8af96f722a25:0x8071626c51a7154a!8m2!3d-23.4302175!4d-46.4716711!16zL20vMDM1anNx?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_cgh",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+de+S%C3%A3o+Paulo%2FCongonhas%E2%80%93Deputado+Freitas+Nobre/@-23.6250332,-46.6627575,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5a7ab9d400f3:0x3ae70697e64d7085!8m2!3d-23.6256024!4d-46.6584716!16zL20vMDRyczBn?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_vcp",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+de+Viracopos/@-23.0049822,-47.147443,16z/data=!3m1!4b1!4m6!3m5!1s0x94c8ca7445c3047b:0x88a68ef7d857f2a3!8m2!3d-23.0049823!4d-47.1425721!16zL20vMGgxbHg?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_gig",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+do+Rio+de+Janeiro%2FGale%C3%A3o%E2%80%93Antonio+Carlos+Jobim/@-22.8052698,-43.2592026,17z/data=!3m1!4b1!4m6!3m5!1s0x99798f3b16364f:0xcfa9dfbf2f584512!8m2!3d-22.8052698!4d-43.2566277!16zL20vMDRzZ2Jo?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_sdu",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Santos+Dumont/@-22.9097959,-43.1663911,17z/data=!3m1!4b1!4m6!3m5!1s0x9981dc9dddeb7b:0xe5dd62143d35dcc7!8m2!3d-22.9097959!4d-43.1638162!16zL20vMDR3dzA4?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_cgr",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+de+Campo+Grande/@-20.4572735,-54.6713084,17z/data=!3m1!4b1!4m6!3m5!1s0x9486e6c269db0537:0xcf6b9b090ea0b007!8m2!3d-20.4572735!4d-54.6687335!16s%2Fm%2F03mbyy5?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "airport_cgb",
      icon: faPlaneDeparture,
      maps: "https://www.google.com/maps/place/Aeroporto+Internacional+de+Cuiab%C3%A1+-+Marechal+Rondon/@-15.6506042,-56.1230338,17z/data=!3m1!4b1!4m6!3m5!1s0x939dadd84e34c3e3:0x7297df2d50140bab!8m2!3d-15.6506042!4d-56.1204589!16s%2Fm%2F02x7cs9?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
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
      name: "christ_redeemer",
      icon: faLandmark,
      maps: "https://www.google.com/maps/place/Cristo+Redentor/@-22.9519163,-43.2149061,17z/data=!4m7!3m6!1s0x997fd5984aa13f:0x9dc984d7019502de!8m2!3d-22.951916!4d-43.2104872!15sCg9jcmlzdG8gcmVkZW50b3JaESIPY3Jpc3RvIHJlZGVudG9ykgERY3VsdHVyYWxfbGFuZG1hcmvgAQA!16zL20vMDNneXR3?entry=tts&g_ep=EgoyMDI0MTAyMy4wIPu8ASoASAFQAw%3D%3D",
    },
    {
      name: "palacio_da_alvorada",
      icon: faBuilding,
      maps: "https://www.google.com/maps/place/Pal%C3%A1cio+da+Alvorada/@-15.7926168,-47.824705,17z/data=!3m1!4b1!4m6!3m5!1s0x935a3cc78d521557:0x5cbd10b8335993c5!8m2!3d-15.7926168!4d-47.8221301!16zL20vMGJ6MDMy?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "catedral_sao_paulo",
      icon: faLandmark,
      maps: "https://www.google.com/maps/place/Catedral+Metropolitana+da+S%C3%A9/@-23.5512801,-46.6392136,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59abb2b2eef1:0xfdb32e67a44103f5!8m2!3d-23.5512802!4d-46.6343427!16zL20vMDl6NGtr?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "catedral_de_petrópolis",
      icon: faLandmark,
      maps: "https://www.google.com/maps/place/Catedral+S%C3%A3o+Pedro+de+Alc%C3%A2ntara/@-22.5055682,-43.1816688,17z/data=!3m1!4b1!4m6!3m5!1s0x990807352764e5:0x264c2adc1b4f4206!8m2!3d-22.5055682!4d-43.1790939!16s%2Fm%2F0vzsjbk?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const activities = [
    {
      name: t("waterpark_sao_bernardo"),
      description: t("waterpark_sao_bernardo_description"),
      position: [-26.7378992, -49.2941321],
      icon: faWaterLadder,
      color: "text-blue-600",
      maps: "https://maps.app.goo.gl/VwG5mkamwRBeyUKA8",
    },
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
      name: t("sugarloaf_mountain"),
      description: t("sugarloaf_mountain_description"),
      position: [-22.9486, -43.1566], // Sugarloaf Mountain
      icon: faCableCar,
      maps: "https://maps.app.goo.gl/VbGxQ8Py2yZn12T69",
    },
  ];

  const naturePlaces = [
    {
      name: t("sao_bernardo_hill"),
      description: t("sao_bernardo_hill_description"),
      position: [-26.7461642, -49.309711],
      icon: faMountainSun,
      maps: "https://maps.app.goo.gl/VLtHpzHr97zcL1ys8",
    },
    {
      name: t("amazon_rainforest"),
      description: t("amazon_rainforest_description"),
      position: [-3.4653, -62.2159], // Amazon Rainforest
      icon: faTree,
      maps: "https://maps.app.goo.gl/QdFCPwH5f53jsvGTA",
    },
    {
      name: t("lençois_maranhenses"),
      description: t("lençois_maranhenses_description"),
      position: [-2.5117, -43.1288], // Lençóis Maranhenses National Park
      icon: faTree,
      maps: "https://maps.app.goo.gl/fTAZcKZJm2WGoA9E8",
    },
    {
      name: t("pantanal"),
      description: t("pantanal_description"),
      position: [-16.4245, -56.8833], // Pantanal
      icon: faTree,
      maps: "https://maps.app.goo.gl/h3MfjX59iMYWFnMg7",
    },
    {
      name: t("iguazu_falls"),
      description: t("iguazu_falls_description"),
      position: [-25.6953, -54.4367], // Iguazu Falls
      icon: faWater,
      maps: "https://maps.app.goo.gl/z5FZ5gZ7iS4R1v9F6",
    },
    {
      name: t("serra_gaucha"),
      description: t("serra_gaucha_description"),
      position: [-29.3751, -50.9969], // Serra Gaúcha
      icon: faMountainSun,
      maps: "https://maps.app.goo.gl/6GRyYMiG7oSyyCc27",
    },
    {
      name: t("jardim_botanico"),
      description: t("jardim_botanico_description"),
      position: [-30.0265, -51.2287], // Jardim Botânico (Botanical Garden) of Porto Alegre
      icon: faTree,
      maps: "https://maps.app.goo.gl/hcEzbuH5RMso9XfS8",
    },
    {
      name: t("parque_vila_germanica"),
      description: t("parque_vila_germanica_description"),
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
    {
      name: t("formosa_waterfall"),
      description: t("formosa_waterfall_description"),
      position: [-26.5602559, -49.37487],
      icon: faWater,
      color: "text-blue-600",
      maps: "https://maps.app.goo.gl/z2sSRqi7eFJpqitP6",
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

  const food = [
    {
      name: "restaurant_jardim_bontanico",
      icon: faUtensils,
      maps: "https://www.google.com/maps/place/Restaurante+T%C3%ADpico+Jardim+Bot%C3%A2nico/@-26.8009702,-49.2813206,17z/data=!3m1!4b1!4m6!3m5!1s0x94defbddf8b4574f:0x99ea401d7b373a56!8m2!3d-26.8009702!4d-49.2787457!16s%2Fg%2F11b81s6pyn?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "restaurant_paromas",
      icon: faUtensils,
      maps: "https://www.google.com/maps/place/Paromas+Restaurante+e+Pizzaria/@-26.8224818,-49.2797015,17z/data=!3m1!4b1!4m6!3m5!1s0x94defc05d3c82901:0xac1a5c3445bdd995!8m2!3d-26.8224818!4d-49.2771266!16s%2Fg%2F11dy7_lg4j?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "restaurant_bierdamm",
      icon: faUtensils,
      maps: "https://www.google.com/maps/place/BierDamm/@-26.8260461,-49.278502,17z/data=!3m1!4b1!4m6!3m5!1s0x94defd0353889405:0x32617cba98e9e0c9!8m2!3d-26.8260461!4d-49.2759271!16s%2Fg%2F11p5zgcx8w?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "restaurant_mattarello",
      icon: faUtensils,
      maps: "https://www.google.com/maps/place/Mattarello+Gourmet+Pizzaria+e+Hamburgueria/@-26.8211684,-49.2795117,17z/data=!3m1!4b1!4m6!3m5!1s0x94defc070c4e36cb:0xa23c43296ff92e9e!8m2!3d-26.8211684!4d-49.2769368!16s%2Fg%2F11dfsnj3t4?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "restaurant_patolino",
      icon: faFish,
      maps: "https://www.google.com/maps/place/Restaurante+Patolino/@-26.8140668,-49.2538453,17z/data=!3m1!4b1!4m6!3m5!1s0x94defc79a7d97807:0xf235b3008651a169!8m2!3d-26.8140668!4d-49.2512704!16s%2Fg%2F11c6db8pg8?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "cafe_madonna_mia",
      icon: faMugHot,
      maps: "https://www.google.com/maps/place/Madonna+Mia+Caff%C3%A8/@-26.82078,-49.2839841,17z/data=!3m1!4b1!4m6!3m5!1s0x94defd62cd999f1d:0x228153ffe391d657!8m2!3d-26.8207801!4d-49.2791132!16s%2Fg%2F11grrhg4v8?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "cafe_kitutte",
      icon: faMugHot,
      maps: "https://www.google.com/maps/place/Cafeteria+Kitutte+-+Timb%C3%B3/@-26.824012,-49.2795584,17z/data=!3m1!4b1!4m6!3m5!1s0x94defc068edcb52b:0xc51a91551158c674!8m2!3d-26.824012!4d-49.2769835!16s%2Fg%2F11bz_2nzzq?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "cafe_schuh",
      icon: faMugHot,
      maps: "https://www.google.com/maps/place/Schuh+Caf%C3%A9/@-26.8219669,-49.2664775,17z/data=!3m1!4b1!4m6!3m5!1s0x94defc731b8c56e9:0x408e0ea51794540c!8m2!3d-26.821967!4d-49.2616066!16s%2Fg%2F11gf0ptwh0?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "cafe_donna_caixa",
      icon: faMugHot,
      maps: "https://www.google.com/maps/place/Donna+Caixa+Bar+%26+Caf%C3%A9/@-26.8184826,-49.2808791,17z/data=!3m1!4b1!4m6!3m5!1s0x94defb7b55f5b035:0x29b4b7fa84374ccd!8m2!3d-26.8184826!4d-49.2783042!16s%2Fg%2F11qh7prbns?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "cafe_latte_macchiato",
      icon: faMugHot,
      maps: "https://www.google.com/maps/place/Caffetteria+Latte+Macchiato/@-26.8190814,-49.2826011,17z/data=!3m1!4b1!4m6!3m5!1s0x94defbea09951d61:0x819a4e692cc48fa9!8m2!3d-26.8190815!4d-49.2777302!16s%2Fg%2F11lgmy3qs_?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "restaurant_villagio_di_cedro",
      icon: faUtensils,
      maps: "https://www.google.com/maps/place/Villaggio+di+Cedro,+Casa+de+Massas/@-26.7525464,-49.2760771,17z/data=!3m1!4b1!4m6!3m5!1s0x94defb7ceeec010d:0x56109b0f5c5e2443!8m2!3d-26.7525464!4d-49.2735022!16s%2Fg%2F11ksw959xv?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "restaurant_pesque_e_pague_andreazza",
      icon: faFish,
      maps: "https://www.google.com/maps/place/Restaurante+e+Pesque+Pague+Andreazza/@-26.7467136,-49.311386,17z/data=!3m1!4b1!4m6!3m5!1s0x94def76690b3490f:0xa16c0846f532b2fc!8m2!3d-26.7467136!4d-49.3088111!16s%2Fg%2F1ptz8jg97?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "restaurant_armazém_do_lago",
      icon: faUtensils,
      maps: "https://www.google.com/maps/place/Armaz%C3%A9m+do+Lago/@-26.6216583,-49.4081969,17z/data=!3m1!4b1!4m6!3m5!1s0x94de61c15e4e16a5:0x70b95c060d83a9f0!8m2!3d-26.6216583!4d-49.405622!16s%2Fg%2F11rk10n1fw?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "restaurant_ess_haus",
      icon: faUtensils,
      maps: "https://www.google.com/maps/place/Ess+-+Haus/@-26.6151093,-49.3999333,17z/data=!3m1!4b1!4m6!3m5!1s0x94de6065a68e2d53:0x24a53f0304493574!8m2!3d-26.6151093!4d-49.3973584!16s%2Fg%2F1ptx38wtl?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "cafe_mae_joana",
      icon: faMugHot,
      maps: "https://www.google.com/maps/place/Caf%C3%A9+da+M%C3%A3e+Joana/@-26.752092,-49.2790206,17z/data=!3m1!4b1!4m6!3m5!1s0x94defa1a9e558bf1:0x44f233008c4dcac5!8m2!3d-26.7520921!4d-49.2741497!16s%2Fg%2F11gb40sbd9?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
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
      food,
    },
  };
};

export default usePOI;
