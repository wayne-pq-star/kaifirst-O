import { Project, ProjectCategory, NavItem, BlogPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'WORK 作品', href: '#work' },
  { label: 'SERVICES 服務', href: '#services' },
  { label: 'ABOUT 關於', href: '#about' },
  { label: 'BLOG 文章', href: '#blog' },
  { label: 'CONTACT 聯絡', href: '#contact' },
];

export const HERO_IMAGES = [
  'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772933694/S2_vfdkqs.jpg',
  'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1773013740/S1_r5jplr.jpg',
  'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772713181/B2_iqcx17.jpg',
  'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772713182/B1_xlx2bi.jpg',
  'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772713173/H2_psxg4f.jpg',
  'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772713174/H1_wa2duo.jpg',
  'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772713178/Ch2_uc3bbz.jpg',
  'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772713178/Ch1_fjalvh.jpg',
  'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772713171/AI-2_vhzopl.jpg',
  'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772713173/AI-1_ahc8cm.jpg',
  'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772713172/R2_uiuftg.jpg',
  'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772713177/R1_obydwt.jpg',
  'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772933916/14_bivqpr.jpg',
  'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1774417360/13_nvccxr.jpg',
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Rhythm Rest',
    category: ProjectCategory.AWARDS,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772584143/1-1-S_ohscd5.png',
    year: '2023',
    location: "1. Muse design (Silver Winner)\n2. A' Design (Bronze Winner)",
    firstImageRatio: '1300/727',
    secondImageRatio: '1920/1073',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772584344/1-1_ah5ft2.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772584378/1-2_d7gxm6.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772584361/1-3_rv18gz.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772584369/1-4_kwhkpj.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772584354/1-5_aw7wtd.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772584323/1-6_xynbpp.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772584333/1-7_zpwh5z.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772584313/1-8_zqhom0.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772584307/1-9_z2scgj.jpg'
    ]
  },
  {
    id: 'things-stars-shift',
    title: 'Things-stars shift•Time stops pass\n物換星移•時光非逝',
    category: ProjectCategory.AWARDS,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772583830/8-S_cmbz4s.jpg',
    year: '2020',
    location: '',
    firstImageRatio: '1300/632',
    secondImageRatio: '1300/632',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772462994/8_zwy6su.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772462986/7_hbkygx.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772463044/1_uapfux.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772463023/2_uo5yx6.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772463014/3_b9gw2b.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772463038/4_hvtrmc.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772463032/6_ldpdri.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772463005/5_u5eyze.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772463071/%E5%B9%B3%E9%9D%A2%E5%9C%96_jx6lam.jpg'
    ]
  },
  {
    id: 'experience-cruise',
    title: 'Experience Cruise•基隆郵',
    category: ProjectCategory.AWARDS,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772584031/Show_dqy8dd.jpg',
    year: '2021',
    location: '1. LIV (LIV HOSPITALITY DESIGN AWARDS)\n2. WAward (worldarchitecture)\n3. IDA (idesignawards)',
    firstImageRatio: '1400/495',
    secondImageRatio: '1400/495',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772464374/1_i3pgvc.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772464368/2_n3ffcu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772464352/Wei-Kai-4_ibyug3.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772464324/Wei-Kai-4_qoht5q.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772464303/Wei-Kai-3_u48hxt.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772464342/Wei-Kai-5_rcachp.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772464284/Enscape_2021-03-13-19-03-56_qlibgk.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772464294/Wei-Kai-6_obnet8.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772464332/Wei-Kai-8_ovy7nn.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772464360/Wei-Kai-7_aibu9h.jpg'
    ]
  },
  {
    id: 'guinness-station',
    title: 'guinness Drinks and Promotion Station',
    category: ProjectCategory.COMMERCIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772604576/1.GU_tk0yvh.jpg',
    year: '2018',
    location: 'TAIPEI CITY 台北市',
    firstImageRatio: '1300/866',
    secondImageRatio: '1300/867',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772438740/12-_1_zfgqrt.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772438697/12-_2_p56rva.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772438721/12-_3_mitwt6.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772438708/12-_4_bgqakw.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772438730/12-_5_qhqblh.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772438758/12-_6_mvrpvs.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772438688/12-_7_yxbic5.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772438782/12-_7_-1_dwomy6.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772438765/12-_8_gaacmi.jpg'
    ]
  },
  {
    id: 'public-facilities',
    title: 'public facilities•尊御',
    category: ProjectCategory.COMMERCIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772604568/2_znuooe.jpg',
    year: '2020',
    location: 'NEW TAIPEI CITY 新北市',
    firstImageRatio: '1300/690',
    secondImageRatio: '1300/731',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772439378/FP_pqxu3j.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772439401/01_qqfgbx.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772439410/02-1_quxvea.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772439387/03_mrauqa.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772439355/ComfyUI_01983__m5pmie.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772439363/ComfyUI_01984__iwdp5x.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772439345/ComfyUI_01985__ylpotj.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772439370/ComfyUI_01982__x6itwm.jpg'
    ]
  },
  {
    id: 'jw-display',
    title: 'wall Display and night club',
    category: ProjectCategory.COMMERCIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772604572/3_kvj2jp.jpg',
    year: '2018',
    location: 'TAIPEI CITY 台北市',
    firstImageRatio: '1300/866',
    secondImageRatio: '1300/866',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772439965/T5-1_wquyhj.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772439972/T5_t4bjwt.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772439957/T6_r9pml6.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772439941/T2_zzrrv4.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772439949/T8_v3pciy.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772439933/T1_ztu0qx.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772439987/P-1_qvffyn.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772439981/P-3_wgq7o3.jpg'
    ]
  },
  {
    id: 'tgl-rs-ls-visibility',
    title: 'RS LS visibility guideline',
    category: ProjectCategory.COMMERCIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772604560/4_jgs2oz.jpg',
    year: '2017',
    location: 'Taiwan 台灣',
    firstImageRatio: '1300/866',
    secondImageRatio: '1300/866',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440419/TGL-B-_3_m678po.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440410/TGL-B-_1_zs6diu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440433/TGL-B-_4_xhuex4.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440454/TGL-B-_5_gqulsu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440395/TGL-B-_8_xpxv86.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440441/TGL-B-_7_wjvzcw.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440401/TGL-B-_10_wadwme.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440426/TGL-B-_12_apwwqm.jpg'
    ]
  },
  {
    id: 'wine-display-window',
    title: 'wine Display window & wall bay',
    category: ProjectCategory.COMMERCIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772604564/5_c7sqmz.jpg',
    year: '2018',
    location: 'Taiwan 台灣',
    firstImageRatio: '1300/600',
    secondImageRatio: '1300/600',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440950/W6_nst84h.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440936/W4_vnl97j.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440973/W12_kuh4kp.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440964/W11_vjfael.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440916/W2_xdjoty.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440930/W3_g7bkwr.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440924/W1_megaht.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440957/W9_v4tr5i.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772440943/W7_wqkxyy.jpg'
    ]
  },
  {
    id: 'office-xingzhu',
    title: 'Office•興築',
    category: ProjectCategory.COMMERCIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772604547/6_qbjxm7.jpg',
    year: '2019',
    location: 'NEW TAIPEI CITY 新北市',
    firstImageRatio: '1300/687',
    secondImageRatio: '1300/687',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772441458/FP-1C_zw0nap.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772441483/Enscape_2022-08-21-09-32-48_vynbdx.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772441504/Enscape_2022-08-21-09-31-31_ug7is1.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772441497/Enscape_2022-08-21-09-31-31--_wtfhfb.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772441467/Enscape_2022-08-21-09-44-07_oadeye.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772441491/Enscape_2022-08-21-09-37-23_xstvhh.jpg'
    ]
  },
  {
    id: 'ds-display',
    title: 'DS-wall bay display',
    category: ProjectCategory.COMMERCIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772604556/7_zniwb4.jpg',
    year: '2017',
    location: 'Taichung City 台中市',
    firstImageRatio: '1300/741',
    secondImageRatio: '1300/741',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772441937/2_zxfkne.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772441931/7_tmw8dn.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772441945/8_ejzih5.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772441922/6_oskmrp.jpg'
    ]
  },

  {
    id: 'wine-display-pillar',
    title: 'wine display podium',
    category: ProjectCategory.COMMERCIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772604541/10_n1rcgl.jpg',
    year: '2018',
    location: 'Taiwan 台灣',
    firstImageRatio: '1300/753',
    secondImageRatio: '1300/753',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772460582/P2_ymqlwp.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772460562/P1_yljbyy.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772460589/P13_og1shr.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772460443/P5_ewbhty.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772460541/P6_d90fql.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772460550/P7_nosays.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772460497/P11_lzyhiu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772460467/P10_chh6tm.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772460479/P9_vaakyd.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772460456/P4_mbtfcq.jpg'
    ]
  },
  {
    id: 'wine-event-stand',
    title: 'wine event stand',
    category: ProjectCategory.COMMERCIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772604544/8_sdyy6e.jpg',
    year: '2018',
    location: 'Taiwan 台灣',
    firstImageRatio: '1300/871',
    secondImageRatio: '1300/871',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772461042/I2_lxbga3.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772461031/I3_vko2rr.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772461060/I4_dtlqw6.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772461024/I5_bdzzre.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772461103/I7_buwsvb.jpg'
    ]
  },
  {
    id: 'wine-accessories',
    title: 'wine Accessories',
    category: ProjectCategory.COMMERCIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772604551/9_qquuec.jpg',
    year: '2018',
    location: 'Taiwan 台灣',
    firstImageRatio: '1300/478',
    secondImageRatio: '1300/478',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772461638/T44_ayvdib.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772461632/T44-1_ek2glu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772461609/T2_lh1d3p.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772461615/T1_t7x2hd.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772461596/T3_ixzttq.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772461585/T6_rdhkf5.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772461603/T5_vbyd2z.jpg'
    ]
  },
  {
    id: '4',
    title: 'Pursuit of Light 逐光誓影',
    category: ProjectCategory.RESIDENTIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772586174/SD_j2ndqd.jpg',
    year: '2022',
    location: 'TAIPEI CITY 台北市',
    customImageClass: 'scale-105', // Subtle zoom to eliminate edge gaps/fill color
    firstImageRatio: '1200/900',
    secondImageRatio: '1300/975',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772538551/2-_15_bgmcl2.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772585952/3-_1_c7ukgr.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772585962/3-_2_dvuv3g.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772585984/3-_3_dcluoy.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772411779/3-_4_whniip.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772411773/3-_5_xbwlrd.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772411760/3-_6_k1biot.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772411742/3-_7_rsmli9.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772411787/3-_8_a944uu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772585996/3-_9_cywdqc.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772586002/3-_10_cohabg.jpg'
    ]
  },
  {
    id: '2',
    title: 'Profound Gathering 行雅文斂',
    category: ProjectCategory.RESIDENTIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772589398/2-_8_-show_agtu9r.jpg',
    year: '2023',
    location: 'TAIPEI CITY 台北市',
    firstImageRatio: '1000/750',
    secondImageRatio: '900/1200',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772426679/2-_15_c10tzn.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772426584/2-_1_pkvzbi.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772426718/2-_2_hhsggi.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772418857/2-_3_fda5wn.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772418826/2-_3_-2_fv7xmn.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772411453/2-_4_s8jmp5.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772418953/2-_4_-11_pre6mf.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772418801/2-_6_tpgaqr.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1770706944/2-_7_ykxljd.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772418885/2-_10_kihyxc.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772418763/2-_8_yestej.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772411192/2-_9_fejbul.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772411414/2-_10_-1_oierk3.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772411287/2-_11_mxkhqt.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772411425/2-_11-1_bbhfby.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772418701/2-_12_c41r6e.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772418918/2-_13_rmbqyd.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772419017/2-_12_-2_yz4usx.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772418984/2-_14_j6zm7k.jpg'
    ]
  },
  {
    id: 'restrained-charm',
    title: 'Restrained Charm 沉斂深韻',
    category: ProjectCategory.RESIDENTIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772588275/SSS_phykgf.jpg',
    year: '2022',
    location: 'TAIPEI CITY 台北市',
    firstImageRatio: '1200/900',
    secondImageRatio: '1200/896',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772755065/FP_hyvpy6.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772412340/%E5%BF%A0-2_vdvk5t.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772421481/%E5%BF%A0-3-S_gsxw47.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772587217/%E5%BF%A0-4_op9tdq.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772421520/%E5%BF%A0-4-1s_b9n6fa.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772587433/%E5%BF%A0-5-2_zk7nt6.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772587229/%E5%BF%A0-6_xhkkr3.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772421509/%E5%BF%A0-7-s_sezhys.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772421426/%E5%BF%A0-8_mijojs.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772587200/%E5%BF%A0-9_h8bb2x.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772587124/%E5%BF%A0-12_hivmfj.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772587178/%E5%BF%A0-11_c1qdfg.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772587162/%E5%BF%A0-10_gvr290.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772587084/%E5%BF%A0-13_sjx5rt.jpg'
    ]
  },
  {
    id: 'cloud-horizon',
    title: 'Cloud Horizon 幻雲天際',
    category: ProjectCategory.RESIDENTIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772588898/SSSSSSS_rzjy3d.jpg',
    year: '2023',
    location: 'Taoyuan City 桃園市',
    firstImageRatio: '1000/748',
    secondImageRatio: '1200/897',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772714209/4-_1_-2_mqnkie.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772714218/4-_1_-5_h36ol0.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772588962/4-_2_-1_wab4ub.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772373193/4-_3_yyulaq.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772588908/4-_3_-1_qelxm8.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772588926/4-_4_hfjqxk.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772588934/4-_5_kj86go.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772588974/4-_6_drfzz1.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772588969/4-_6_-1_sfcifv.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772588946/4-_8_grdq0e.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772588953/4-_9_xzotvt.jpg'
    ]
  },
  {
    id: 'elegant-collection',
    title: 'Elegant Collection 宏暉雅集',
    category: ProjectCategory.RESIDENTIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772590304/10-_2_-comfy_uvbbrq.jpg',
    year: '2019',
    location: 'NEW TAIPEI CITY 新北市',
    firstImageRatio: '1000/558',
    secondImageRatio: '1400/782',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772428562/FP-comfy_tdlefj.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772590339/10-_2_-comfy_senazl.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772755381/104_bcpttp.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772590353/10-5_mkbi3e.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772755380/106_mmf394.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772590475/10-_7_ofgpzk.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772590385/10-9_u5fdnm.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772755380/108_vmchky.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772590411/10-11_zceuua.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772590469/10-10-3P_wukfg5.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772590453/M1-FC_nowhov.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772590445/M2-C1_q9e0jf.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772590426/M3-Final-C_psdawg.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772590404/B1-A-C_qtucdn.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772590436/B2-A-C_owq8o3.jpg'
    ]
  },
  {
    id: 'unique-craftsmanship',
    title: 'Unique Craftsmanship 匠心獨印',
    category: ProjectCategory.RESIDENTIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772591182/S1_udybjp.jpg',
    year: '2019',
    location: 'TAIPEI CITY 台北市-樣品屋',
    firstImageRatio: '1200/675',
    secondImageRatio: '1400/788',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772537598/6-11-1_zrhcp7.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772430185/6-1_nawe1k.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772412885/6-2_hac4qe.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772430198/6-3_qkib8u.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772430158/6-4_ulr0pf.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772430177/6-5_z7l4bn.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772430093/6-5-2_ipcwan.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772430120/6-6_lewktx.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772412904/6-7_p08f0c.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772412891/6-8_hwi8ny.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772430166/6-9_ejjoaz.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772430101/6-10_u1u4vl.jpg'
    ]
  },
  {
    id: 'sincere-surge',
    title: 'sincere surge 衷正疾馳',
    category: ProjectCategory.RESIDENTIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772591748/12-2-C-S43_tu74ak.jpg',
    year: '2025',
    location: 'Taoyuan City 桃園市',
    firstImageRatio: '1200/675',
    secondImageRatio: '1400/788',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772755653/FP_cn5s9f.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772591811/12-2-CS_amw9lu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772591763/12.5-1_iwkgnq.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772591833/12-4_oikyf8.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772591825/12-1-C_fwjwew.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772591776/12-3-C2_lzfl04.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772591787/12-7C_lsldc6.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772413299/12-6-2_hv0ina.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772413293/12-10_fyminq.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772413286/12-9_uif3c4.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772591798/12-8_fbtsdi.jpg'
    ]
  },
  {
    id: 'silent-element',
    title: 'silent element 寂塑靜塵',
    category: ProjectCategory.RESIDENTIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772592318/ComfyUI-Turn_00007__rzqnzx.png',
    year: '2023',
    location: 'NEW TAIPEI CITY 新北市',
    firstImageRatio: '1000/750',
    secondImageRatio: '1280/960',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772536518/FP-C_ygviuf.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772376002/13-1_xruwia.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772375986/13-2_jqmbyr.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772001859/3_suf4nr.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772375972/13-4_lcfgxr.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772375993/12-5_amgom7.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772375979/12-7_c4wil5.jpg'
    ]
  },
  {
    id: 'sunny-royalty',
    title: 'sunny Royalty 尊御上晴',
    category: ProjectCategory.RESIDENTIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772592654/ComfyUI_01916_SP_nveczp.jpg',
    year: '2020',
    location: 'TAIPEI CITY 台北市-實品屋',
    firstImageRatio: '1200/670',
    secondImageRatio: '1400/788',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772536664/5-_1_uxsekd.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772432950/ComfyUI_01916__ylw9xt.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772432957/ComfyUI_01917__o3hkt9.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772432965/ComfyUI_01918__b8j8p7.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772432911/ComfyUI_01919__trlrdw.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772432930/ComfyUI_01920__npja00.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772432937/ComfyUI_01921__lpunlb.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772432996/ComfyUI_01922__o1mvaj.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772432974/ComfyUI_01923__mud8wg.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772432903/ComfyUI_01924__aeuiet.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772433038/ComfyUI_01925__oizgvw.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772432918/ComfyUI_01926__nklxza.jpg'
    ]
  },
  {
    id: 'endorse-classical',
    title: 'ENDORSE classical 欣穎古典',
    category: ProjectCategory.RESIDENTIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772592854/S_sma2go.jpg',
    year: '2019',
    location: 'NEW TAIPEI CITY 新北市-樣品屋',
    firstImageRatio: '1200/800',
    secondImageRatio: '1400/933',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772755777/Fp_qcvngc.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772433946/1-1_ymtztq.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772433920/2_opnubk.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772433914/3_spp8pn.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772433933/4_vez6di.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772433927/5_ttznrs.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772433939/6_r8tlsw.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772433886/7m-4_twyofa.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772433850/7m-1_heomgx.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772433869/7m_eyu7yy.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772433879/7m-2_wzj43w.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772433897/7m-3_cvrus2.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772433856/8-1_hfyof5.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772433843/8-2_iqfznf.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772433904/9-1_rk1kqv.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772433836/9-2_igxctt.jpg'
    ]
  },
  {
    id: 'mind-flow',
    title: 'mind flow 境心•流',
    category: ProjectCategory.RESIDENTIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772593845/SS_bg9gqt.jpg',
    year: '2019',
    location: 'NEW TAIPEI CITY 新北市-樣品屋',
    firstImageRatio: '1200/670',
    secondImageRatio: '1400/788',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772755836/fp_sdpigx.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772593488/6-F_feefzu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772593378/7-F_ikuvc0.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772755905/F_ugunlq.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772593420/8-F_maffpu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772593405/9-F_uuiwdh.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772593476/M1-F_cldfp6.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772593367/M2_ohipoj.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772593388/M3_ywpmhn.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772593435/B1_dhtnzq.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772593444/B2_nzcmcm.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772593464/1_jwn4bb.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772593457/2_xnlnzk.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772593498/3_yixu64.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772593506/4_is2guo.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772593396/5-10_h0e8eh.jpg'
    ]
  },
  {
    id: 'light-era',
    title: 'light era 實光爍際',
    category: ProjectCategory.RESIDENTIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772594221/S1_nvxazj.jpg',
    year: '2019',
    location: 'NEW TAIPEI CITY 新北市',
    firstImageRatio: '1000/563',
    secondImageRatio: '1400/788',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772756012/F_amhmpn.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772436763/9-_4_-1_k1rri7.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772436782/9-_5-F_-1_jy6ehl.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772436672/9-6_wjak11.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772436693/9-_4_-2_b3dq7t.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772436708/9-7_kfukyp.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772436700/9-6-1_lylbuu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772756014/M_fvmrox.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772436679/Wea-3_ap1yew.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772436685/Wea-1_ssppae.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772436715/B1_cc5gnf.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772436726/B2_l8r5ug.jpg'
    ]
  },
  {
    id: 'universe-diary',
    title: 'universe diary 宇恆慧誌',
    category: ProjectCategory.RESIDENTIAL,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772609746/Sjpg_fvjk8h.jpg',
    year: '2019',
    location: 'NEW TAIPEI CITY 新北市',
    attribution: '本專案為任職於峰閣設計期間，由本人擔任室內設計師主導執行之作品',
    footerAttribution: '此專案為任職公司時期之作品',
    excludeFromAll: true,
    firstImageRatio: '1200/675',
    secondImageRatio: '1400/788',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772756110/18_u1cfgt.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772609618/7-_7_voeo9f.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772609603/7-_5_iwawri.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772609613/7-_6_cisrly.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772609607/3P_tgwtsx.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772609716/7-_8-C_bgtjkx.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772609740/3-1P_o3pnk7.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772609722/M2-C_vbhfzh.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772609704/M1-C_dwpchw.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772609734/M3_lpphvz.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772609710/B1_u3espa.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772609728/B2-C_vkhn5s.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772609698/B2-1_qml2d9.jpg'
    ]
  },
  {
    id: 'morning-light',
    title: 'Morning light 晨曦清隱',
    category: ProjectCategory.FIRST_DESIGN,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772521780/Show_toizgd.jpg',
    year: '2022',
    location: 'NEW TAIPEI CITY 新北市',
    firstImageRatio: '1200/612',
    secondImageRatio: '1200/548',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772521787/%E6%9D%BF%E6%A9%8B%E6%A1%88-7F-%E5%B9%B3%E9%9D%A2%E5%9C%96-20221105-1PS_qbl4eg.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772521722/Enscape_2022-12-16-10-09-15_dyz0me.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772521741/Enscape_2022-12-16-10-10-58_nshkuj.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772521772/Enscape_2022-12-16-10-08-02_dwaxbj.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772521761/Enscape_2022-12-16-10-11-41_kmfqru.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772521750/Enscape_2022-12-16-10-13-29_sdaiu8.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772521712/Enscape_2022-12-16-10-12-19_dthfvo.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772521731/Enscape_2022-12-16-10-15-56_z6hdaz.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772521701/Enscape_2022-12-16-10-15-16_j0dgsp.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772521692/Enscape_2022-12-16-10-14-08_vukwsp.jpg'
    ]
  },
  {
    id: 'kai-first-ai-application',
    title: 'KAI FIRST•AI Application AI應用',
    category: ProjectCategory.AI,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772518921/223_xlhjth.jpg',
    year: '',
    location: '',
    firstImageRatio: '1400/638',
    secondImageRatio: '1400/553',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772498476/%E5%B9%B3%E9%9D%A2-3-1_czbsri.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772498493/%E5%B9%B3%E9%9D%A2_%E5%BD%A9_-4_dcxkxb.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772498509/2D%E8%BD%893D-_5_med5cx.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772370966/%E7%A9%BA%E9%96%93%E5%8A%A0%E5%8F%83%E8%80%83%E5%9C%96-2_mvzjlq.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772370798/%E7%A9%BA%E9%96%93%E5%8A%A0%E5%8F%83%E8%80%83%E5%9C%96_bdit7r.jpg'
    ]
  },
  {
    id: 'kai-first-residence',
    title: 'KAI FIRST• Residence 住宅 (凱初APP)',
    category: ProjectCategory.AI,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772518907/S-AP_xizdmb.jpg',
    year: '',
    location: '',
    firstImageRatio: '1200/670',
    secondImageRatio: '1200/670',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500765/9_wkgovm.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500774/8_ebcckz.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500780/7_a0wun2.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500790/6_zebnmv.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500797/5_qtxpf9.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500805/4_s8bnjq.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500813/3_rzjglm.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500820/2_wxl8aq.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500828/1_mrownz.jpg'
    ]
  },
  {
    id: 'kai-first-living-room-3',
    title: 'KAI FIRST• Living room 客廳 (凱初APP)',
    category: ProjectCategory.AI,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772518917/APP-1-512_gf32wj.jpg',
    year: '',
    location: '',
    firstImageRatio: '1200/670',
    secondImageRatio: '1200/670',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500882/11_qvjswc.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500889/15_slumed.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500856/13_qk8wvc.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500864/14_mkhfdp.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500876/12_mk0rc2.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500897/17_lgwuho.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500941/19_b9ibrs.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500942/21_jyxgmk.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500942/20_gv4gl1.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772500942/18_i3ltkh.jpg'
    ]
  },
  {
    id: 'kai-first-living-room',
    title: 'KAI FIRST• Living room 客廳-2',
    category: ProjectCategory.AI,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772518898/SL_mop3rt.jpg',
    year: '',
    location: '',
    firstImageRatio: '1200/800',
    secondImageRatio: '1200/800',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772502301/9_wsfx5q.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772502322/8_fv5jdu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772502278/10_qqeyhc.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772502358/3_nu1qpo.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772502268/5_dm21wk.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772502293/4_bntrle.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772502350/6_xfly3t.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772502285/11_srz6oi.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772502330/7_rmgo4i.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772502315/13_pfrdfi.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772502337/2_xcknjh.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772502343/1_gkapnr.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772502308/12_di5cwk.jpg'
    ]
  },
  {
    id: 'kai-first-dining-room',
    title: 'KAI FIRST•dining room 餐廳',
    category: ProjectCategory.AI,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772518891/DS_naof0u.jpg',
    year: '',
    location: '',
    firstImageRatio: '1200/800',
    secondImageRatio: '1200/800',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772503222/12_opmn70.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772503231/9_quwkaz.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772503238/10_gunalg.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772503297/2_htolxy.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772503214/8_omiomw.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772503207/11_ud8cvf.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772503245/7_fldnmm.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772503258/5_jk1qqa.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772503252/6_wlyxgd.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772503281/1_uizz6v.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772503271/3_tkavjk.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772503264/4_fnywq4.jpg'
    ]
  },
  {
    id: 'kai-first-bedroom',
    title: 'KAI FIRST• Bedroom 臥房',
    category: ProjectCategory.AI,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772518913/Ho-2_fcv6a2.jpg',
    year: '',
    location: '',
    firstImageRatio: '1200/670',
    secondImageRatio: '1200/670',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504155/2_ldq0zp.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504205/22_w0fwc4.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504198/1_jlnbdh.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504216/77_hiaune.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504184/5_ar3llu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504175/66_mywlmq.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504165/4_x8qrpn.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504191/33_krsp04.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504241/FP_l6adie.jpg'
    ]
  },
  {
    id: 'kai-first-living-room-original',
    title: 'KAI FIRST• Living room 客廳-1',
    category: ProjectCategory.AI,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772518895/1S1_h00cdf.jpg',
    year: '',
    location: '',
    firstImageRatio: '1300/867',
    secondImageRatio: '1300/867',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504494/1_awx1ft.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504577/2_pm96e1.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504586/3_jhfbn2.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504596/4_swzzyr.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504504/5-_s26pbu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504609/6_fdga8r.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504619/7_wcezk5.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504627/8_kaklu5.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504637/9_osttr4.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504514/10_wizenw.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504552/12_tviv0c.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772504901/00222_oggfgu.jpg'
    ]
  },
  {
    id: 'kai-first-study-room',
    title: 'KAI FIRST• study room 書房',
    category: ProjectCategory.AI,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/f_auto,q_auto/v1772518901/SS_o6k2aq.jpg',
    year: '',
    location: '',
    firstImageRatio: '1200/800',
    secondImageRatio: '1200/800',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772505479/10_z81lak.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772505472/11_cxcqcd.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772505512/8_klb6nu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772505520/12_h00kbk.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772505504/9_lhlu2c.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772505529/7_z3rdov.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772505546/5_tswwim.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772505539/3_hzxyea.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772505561/2_g2v7fu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772505554/6_vvpdwv.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772505487/4_ddlf8d.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772505497/1_uhccqg.jpg'
    ]
  },
  {
    id: 'kai-first-living-room-2',
    title: 'KAI FIRST• Living room (Minecraft)',
    category: ProjectCategory.AI,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772518910/MC-1_rhsmf7.jpg',
    year: '',
    location: '',
    firstImageRatio: '1200/800',
    secondImageRatio: '1200/800',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772506433/1_nitmu0.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772506419/5_bbgmc5.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772506394/3_tl3lky.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772506449/2_nz5hkl.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772506441/6_gwumuy.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772506411/8_qhpyqv.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772506426/4_fqkvnv.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772506457/9_rts2dl.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772506403/7_ergnm6.jpg'
    ]
  },
  {
    id: 'kai-first-panorama',
    title: 'KAI FIRST•panorama 全景',
    category: ProjectCategory.AI,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772518888/PS_h46mdo.jpg',
    year: '',
    location: '',
    firstImageRatio: '1200/288',
    secondImageRatio: '1200/288',
    thirdImageRatio: '1200/288',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772507492/%E7%AC%AC%E4%B8%80%E7%A8%AE%E6%A8%A1%E5%BC%8F-%E8%BC%83%E5%B0%8F_sg8vmx.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772507467/%E5%87%B1%E5%88%9D%E8%A8%AD%E8%A8%88_AI%E5%85%A8%E6%99%AF%E5%9C%96_1767278316117_os2f4u.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772507454/%E5%87%B1%E5%88%9D%E8%A8%AD%E8%A8%88_AI%E5%85%A8%E6%99%AF%E5%9C%96_1767277135199_qaynlu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772507441/%E5%87%B1%E5%88%9D%E8%A8%AD%E8%A8%88_AI%E5%85%A8%E6%99%AF%E5%9C%96_1767275380880_z4onk7.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772507498/%E6%9C%AA%E5%91%BD%E5%90%8D-1225_i34j8v.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772507355/%E5%87%B1%E5%88%9D%E8%A8%AD%E8%A8%88_AI%E5%85%A8%E6%99%AF%E5%9C%96_1767349297153_jwnofj.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772507378/%E5%87%B1%E5%88%9D%E8%A8%AD%E8%A8%88_AI%E5%85%A8%E6%99%AF%E5%9C%96_1767349349560_bqw916.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772507342/%E5%87%B1%E5%88%9D%E8%A8%AD%E8%A8%88_AI%E5%85%A8%E6%99%AF%E5%9C%96_1767349240962_flxfbw.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772508095/1_obuagy.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772507399/%E5%87%B1%E5%88%9D%E8%A8%AD%E8%A8%88_AI%E5%85%A8%E6%99%AF%E5%9C%96_1767320330398_hihajq.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772507409/%E5%87%B1%E5%88%9D%E8%A8%AD%E8%A8%88_AI%E5%85%A8%E6%99%AF%E5%9C%96_1767320308608_yil1tg.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772507420/%E5%87%B1%E5%88%9D%E8%A8%AD%E8%A8%88_AI%E5%85%A8%E6%99%AF%E5%9C%96_1767320609877_fkrgbp.jpg'
    ]
  },
  {
    id: 'kai-first-floor-plan',
    title: 'KAI FIRST• Floor plan AI自動平面配置',
    category: ProjectCategory.AI,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772518887/SFP_hi20qy.jpg',
    year: '',
    location: '',
    firstImageRatio: '1200/511',
    secondImageRatio: '1200/511',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772508963/622702851_26658776150377295_1076874334386997184_n_irghvt.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772509017/622837038_26658775683710675_6795934768406419470_n_ffbtki.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772508987/625337568_26658775660377344_8167751812568845057_n_s1o3c9.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772508998/623680805_26658775670377343_4951102083161202303_n_i66yeo.jpg'
    ]
  },
  {
    id: 'kai-first-color-floor-plan',
    title: 'KAI FIRST•color Floor plan 彩色平面圖',
    category: ProjectCategory.AI,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772518904/GT-1_zrppxc.jpg',
    year: '',
    location: '',
    firstImageRatio: '1200/900',
    secondImageRatio: '1200/675',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772508877/3-_11_s02yhc.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772508841/FP_%E5%BD%A9_-C2_na49do.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772508920/%E5%BF%A0%E8%AA%A0%E8%B7%AF-FP-final_hfce3k.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772508885/2-_15_cipwb3.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772508907/FP-comfy-B_ro6pdu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772520885/5-_1_n9b251.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772508868/%E5%B9%B3%E9%9D%A2%E6%94%BE%E5%A4%A7_jnw2aq.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772508856/18-FP_%E5%BD%A9_-c1_bdvb4c.jpg'
    ]
  },
  {
    id: 'white-studio',
    title: 'white studio',
    category: ProjectCategory.FIRST_DESIGN,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522214/S_s2s5wz.jpg',
    year: '',
    location: '',
    firstImageRatio: '1200/692',
    secondImageRatio: '1200/692',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522114/Enscape_2021-08-18-19-20-41_s0jfu1.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522095/Enscape_2021-08-18-19-24-56_rkxh4s.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522107/Enscape_2021-08-18-19-24-17_hbwxpn.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522088/Enscape_2021-08-18-19-20-01_pugok7.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522078/Enscape_2021-08-18-19-23-27_h36twl.jpg'
    ]
  },
  {
    id: 'elegant-residence',
    title: 'elegant Residence',
    category: ProjectCategory.FIRST_DESIGN,
    image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522576/S_ivap4f.jpg',
    year: '',
    location: '',
    firstImageRatio: '1200/675',
    secondImageRatio: '1200/675',
    gallery: [
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522840/Enscape_2022-09-08-14-57-42_hjb5au.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522814/Enscape_2022-09-08-14-58-57_m1mfhj.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522806/Enscape_2022-09-08-15-00-15_jhgmvf.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522796/Enscape_2022-09-08-15-00-59_npngnt.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522645/Enscape_2022-09-08-14-27-38_pyhr96.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522616/Enscape_2022-09-08-14-32-21_k6klwn.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522822/Enscape_2022-09-08-14-33-10_cceoga.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522829/Enscape_2022-09-08-14-32-45_qn7wan.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522591/Enscape_2022-09-08-14-29-04_fiv3wq.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522599/Enscape_2022-09-08-15-07-47_iqozjk.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772523018/Enscape_2022-04-29-18-33-34_vykbms.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522631/Enscape_2022-04-29-18-34-22_ubcsnu.jpg',
      'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto/v1772522608/Enscape_2022-04-29-18-34-39_bwjoaw.jpg'
    ]
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'AI 瞬間模擬：打破傳統設計的「想像斷層」',
    date: 'JAN 02, 2026',
    excerpt: '告別漫長等待，一鍵生成多變空間風格。',
    image: 'https://img.youtube.com/vi/ckL2igUV_OQ/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/ckL2igUV_OQ',
    content: `傳統設計的痛點：過程長、溝通難 
在傳統的室內設計流程中，從初步洽談到看見第一張 3D 效果圖，往往需要經歷數週的等待。設計師需耗費大量時間進行現場丈量、CAD 放樣與 3D 建模，最後再經過漫長的電腦渲染程序才能產出視覺提案。
•	缺點一：溝通存在想像斷層。屋主往往看不懂專業的平面圖，僅能憑空想像，導致完工後才發現與預期產生落差。
•	缺點二：風格更換成本極高。若想從北歐風切換到現代簡約風，設計師必須重新調整材質與燈光，每一次「修改」都代表高昂的時間與金錢成本。

凱初的 AI 解決方案：快速風格模擬（初階版） 
KAIFIRST 凱初設計 為了優化客戶體驗，開發了「快速生圖 APP（初階版）」，將繁瑣的渲染程序簡化為直覺的編輯步驟。您只需提供空間照片，即可在短時間內生成高品質的空間設計提案。
•	優點：實現「即時預覽」。您在洽談初期就能直觀看見空間的各種風格可能性，大大縮短了規劃週期，讓設計決策更加果斷且精準。`
  },
  {
    id: '2',
    title: 'AI深度風格轉化：將您的美學靈感「精準遷移」',
    date: 'JAN 08, 2026',
    excerpt: '精準提取靈感照片，量身訂製您的私人美學。',
    image: 'https://img.youtube.com/vi/AFEvIVobDuw/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/AFEvIVobDuw',
    content: `傳統設計的痛點：風格不符、修改緩慢 
許多屋主在裝潢前會收藏心儀的範例照，但最困擾的是如何將這些「美感」完美移植到自己的格局中。傳統模式下，設計師很難僅憑幾張照片就百分之百捕捉到客戶心中的「氛圍感」，常導致最終提案與期待產生落差。
•	缺點一：風格移植不精準。即便參考了照片，由於光影與材質表現的限制，傳統建模很難達成完全一致的氛圍。
•	缺點二：修改時程冗長。為了追求特定風格的細微調整，往往需要反覆溝通與重新渲染，耗費大量溝通心力。

凱初的 AI 解決方案：精準風格轉化（進階版） 
為了達成更高層次的客製化美學，我們推出了「AI 風格進階版 APP」，支援強大的「風格參考功能」。
•	優點：實現「靈感量身定做」。您只需提供喜歡的風格照片，系統會自動提取其中的色彩計畫、材質紋理與燈光氛圍，並精準套用在您的實際空間配置中。這項技術讓我們能跨越傳統溝通的門檻，確保最終設計提案與您的品味百分之百契合。`
  },
  {
    id: '3',
    title: '全景視野不卡關：凱初設計 AI 技術，讓 720° 空間修改即刻完成',
    date: 'JAN 15, 2026',
    excerpt: '突破傳統全景修改瓶頸，隨心定義 360 度理想家。',
    image: 'https://img.youtube.com/vi/87KipWLt0_U/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/87KipWLt0_U',
    content: `在室內設計的提案中，全景圖（Panorama）能提供最直觀的空間沉浸感，讓客戶如同身歷其境。然而，傳統的全景圖製作與修改流程，一直是設計師與屋主最頭痛的環節。
傳統設計的痛點：全景圖修改緩慢且繁瑣
傳統模式下，全景圖是由複雜的 3D 模型渲染而成。當屋主希望更換全景視野中的某個牆面材質或家具風格時，流程往往陷入僵局：
•	缺點一：渲染耗時極長。全景圖的畫素極高，每一次細微修改都需要重新進行 360 度的完整渲染，耗費數小時甚至更久。
•	缺點二：即時調整困難。在洽談現場，設計師難以根據客戶回饋立即調整全景內容，導致溝通時程被無限拉長。
•	缺點三：修改成本高昂。反覆的渲染與調整耗費設計師大量精力，也間接增加了屋主的時間負擔。

凱初的 AI 解決方案：AI 全景圖快速生成與編輯
KAIFIRST 凱初設計 為了優化溝通體驗，將 AI 運算導入全景圖製作流程。透過凱初設計創建的快速生圖 APP，僅需簡易的上傳、編輯步驟，即可快速生成 3D 室內全景效果圖。
•	優點一：極速生成 360° 視野。利用 AI 空間運算技術，原本需要數小時的渲染，現在僅需極短時間即可產出全景提案。
•	優點二：強大的即時編輯功能。APP 內建圖片編輯工具，讓您能針對全景圖細節進行微調，不論是更換風格還是調整布局都能迅速完成。
•	優點三：溝通零時差。屋主能在短時間內看到不同風格的全景設計模擬，大幅提升決策效率，確保最終成品完美符合期待。`
  },
  {
    id: '4',
    title: '告別圖不對題：凱初設計讓風格提案精準契合您的空間',
    date: 'JAN 22, 2026',
    excerpt: '克服案場尺度限制，以 AI 技術驅動高靈活性的設計溝通。',
    image: 'https://img.youtube.com/vi/YBvNlO3nWls/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/YBvNlO3nWls',
    content: `在傳統室內設計的溝通階段，設計師常使用參考照片來介紹風格。然而，這些精美的照片往往與客戶實際案場的空間尺度不符，導致屋主難以真實想像設計成果。
傳統設計的痛點：參考照片與現實的落差
傳統流程中，一旦風格確定，設計師需進行繁瑣的 3D 建模與燈光渲染。當客戶想要大幅修改時，流程便會陷入惡性循環：
•	缺點一：參考圖與空間不匹配。現成的範例照無法完全反應現場尺度，導致客戶對成果的認知出現偏差。
•	缺點二：修改流程冗長費力。每次調整風格或需求，設計師都必須反覆建模與渲染，極度耗費時間成本。
•	缺點三：缺乏即時多樣化方案。冗長的製作過程無法提供即時的靈感選擇，限制了設計階段的探索可能性。

凱初的 AI 解決方案：Stable Diffusion 賦能的高效設計
為了加速設計流程，凱初設計正式導入 Stable Diffusion 技術。我們不再受限於範例照片，而是直接在案場空間的基礎上進行 AI 運算。
•	優點一：精準比例的即時模擬。我們利用實際案場空間並輸入石材、木材等元素需求，快速生成多種配置方案，讓模擬圖完全符合現場尺度。
•	優點二：極高彈性的修改效率。若客戶想增加展示空間或更換材質，只需調整關鍵字，AI 即可迅速提供多樣化的設計提案，讓修改變得靈活且直觀。
•	優點三：啟發無限設計靈感。AI 生成不僅大幅縮短溝通時程，更能協助設計師與客戶在短時間內探索更多美學可能，達成高效且高品質的設計成果。
專業堅持： 我們深知 AI 生成並非萬靈丹。在凱初，AI 是提升效率的利器，最終仍需依賴我們深厚的室內設計經驗進行細部調整，才能為您呈現最佳的空間品質。`
  },
  {
    id: '5',
    title: '多模態電視牆設計，AI引導透析您專屬的氣勢磅礡',
    date: 'JAN 29, 2026',
    excerpt: '結合設計師的工學專業，讓 AI更貼近真實需求',
    image: 'https://img.youtube.com/vi/WossiJzPJsY/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/WossiJzPJsY',
    content: `在上一篇中，我們介紹了AI 在室內設計中的應用優勢。本集我們將進一步深入探討如何透過進階技術，讓 AI 的創作成果更具備實務參考價值。
傳統 AI 生成的挑戰：美觀但比例失真
雖然直接在淨空間中組合材料與需求等關鍵字，能快速產出多樣化的配置效果圖，但在實際的工程應用中仍存在以下限制：
•	缺點一：人體工學細節不足。AI 有時難以自動考量家具的高度與間距是否符合人體工學。
•	缺點二：動線考量較為薄弱。純關鍵字生成的方案，可能忽略了居住者在空間中行走的順暢度。
•	缺點三：空間比例掌控稍顯不精準。缺乏引導的情況下，生成的物件尺寸可能與實際案場尺度產生偏差。

凱初的 AI 解決方案：幾何輪廓參考與專業篩選
為了讓 AI 的潛力與實際需求接軌，KAIFIRST 凱初設計 採取了更嚴謹的生成流程。我們在淨空間中加入幾何輪廓作為參考基準，引導 AI 進行運算。
•	優點一：精準掌握位置與比例。透過幾何輪廓的導引，AI 能更準確地在指定位置生成家具，產出的結果更符合實際現場需求。
•	優點二：高效且多樣的配置方案。在確保比例正確的前提下，我們仍能快速生成多種材料組合的效果圖供客戶篩選。
•	優點三：專業與科技的完美結合。最終的成果會由設計師依據專業經驗進行調整，確保設計在具備創意的同時，兼顧靈活度與實用性。
核心價值： 結合設計師的專業判斷與 AI 的無限潛力，凱初設計讓每一份提案都能在美學與功能之間取得完美平衡。`
  },
  {
    id: '6',
    title: '預見未來：凱初設計讓空間瞬間充滿生活溫度',
    date: 'FEB 05, 2026',
    excerpt: '從現場到3D渲染，快速探索新家主牆與採光的無限可能。',
    image: 'https://img.youtube.com/vi/fLzplA9irzI/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/fLzplA9irzI',
    content: `在上一篇中，我們介紹了AI在室內設計中的應用優勢。本集我們將直接以「新成屋現場照片」為實例，展示 AI 如何協助屋主在交屋初期就預見理想的居家樣貌。
傳統設計的痛點：空曠空間的想像斷層
面對新成屋大面積的空白主牆與落地窗，屋主往往難以憑空想像家具擺放與材質搭配後的實際感受：
•	缺點一：現場照片缺乏帶入感。單純的現場照片無法呈現光影與材質細節，屋主對未來空間的規劃缺乏安全感。
•	缺點二：風格確認時程冗長。傳統流程需經過精確建模與材質渲染，若想看不同色系的主牆效果，往往需等待數天。
•	缺點三：決策成本高昂。在未見到模擬圖前，屋主難以確認建材選色，反覆的討論容易造成設計時程的延宕。

凱初的 AI 解決方案：實景基底與快速生圖
KAIFIRST 凱初設計 利用現場實景照片作為基底，在AI中組合材料與需求等關鍵字，為您的新成屋快速生成多樣化效果圖。
•	優點一：精準還原現場採光。以現場照片生成的 AI 模擬圖，能更真實地反應大面積落地窗的採光效果，讓設計更貼近現實。
•	優點二：多樣化效果即時呈現。針對主牆材質（如石材、木質或特殊塗料），我們能快速產出多種配置方案，供您欣賞並挑選最屬意的創作成果。
•	優點三：高效啟發設計靈感。這項技術大幅縮短了風格探索期，讓您在設計階段就能輕鬆體驗不同生活情境，確保最終成品完美契合期待。`
  },
  {
    id: '7',
    title: '理想餐廚瞬間成形，精準規劃您的中島與收納美學',
    date: 'FEB 12, 2026',
    excerpt: '從桌椅配置到收納材質，以 AI 運算預見溫馨的用餐時光。',
    image: 'https://img.youtube.com/vi/IdrlgNwcQf8/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/IdrlgNwcQf8',
    content: `在上一集中，我們介紹了AI在室內設計中的應用優勢。本集我們將焦點轉向居家生活的核心——餐廳空間，展示 AI 如何協助屋主在配置階段就掌握細節。
傳統設計的痛點：複雜配置的溝通瓶頸
餐廳空間通常涉及桌椅、中島與大量的收納櫃規劃，在傳統流程中，這些機能與美感並重的配置最容易產生溝通落差：
•	缺點一：多樣配置嘗試緩慢。若屋主想比較「中島結合餐桌」與「獨立中島」的不同動線，設計師需重新建模，耗費大量等待時間。
•	缺點二：收納材質難以抉擇。收納櫃體佔比大，僅憑材料樣板難以想像整體牆面完成後的視覺感，容易導致選色後的心理落差。
•	缺點三：渲染週期長、靈活性低。面對客戶對餐廳氛圍的細微調整，傳統渲染無法提供即時的反饋，減緩了設計決策的效率。

凱初的 AI 解決方案：餐廳配置與AI快速生成
KAIFIRST 凱初設計 針對餐廳空間進行專業規劃，並透過AI組合材料與需求等關鍵字，為您快速生成多樣化的效果提案。
•	優點一：精準模擬餐廚動線。我們預先規劃桌椅、中島與收納櫃的相對位置，再由 AI 賦予真實材質感，讓您直觀感受空間比例。
•	優點二：材質與風格的極速切換。不論是石材中島還是木質收納櫃，透過 AI 關鍵字調整，我們能即時呈現多種色彩與風格方案供您欣賞。
•	優點三：大幅縮短風格探索時程。高效的生成技術讓設計討論更集中在實用的機能配置上，確保最終的餐飲空間既美觀又符合您的生活習慣。`
  },
  {
    id: '8',
    title: '書卷美學新維度：精準預見您的書房展示收納',
    date: 'FEB 19, 2026',
    excerpt: '從書桌配置到背景展示牆，以高效 AI 運算驅動更靈感的閱讀空間。',
    image: 'https://img.youtube.com/vi/tIze2VIb0GQ/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/tIze2VIb0GQ',
    content: `書房是沉澱心靈與高效工作的核心，而書桌後方的風景往往決定了整個空間的層次。本集我們以書房空間為例，展示AI如何協助屋主在機能與美感之間取得完美平衡。
傳統設計的痛點：複雜收納與美感難以兼顧
針對書桌後方配置大型展示收納櫃的需求，傳統設計流程中常遇到以下瓶頸：
•	缺點一：格狀收納想像斷層。展示櫃的格位劃分與背板材質極為細瑣，單憑立面圖，屋主難以感受收納後的層次美感。
•	缺點二：材質搭配修改緩慢。若想更換木質背板為石材或鏡面，傳統 3D 渲染需耗費大量時間重新運算，拖慢決策效率。
•	缺點三：視覺壓迫感難以評估。大面積收納牆是否會造成書房的壓迫感，在傳統流程中需反覆調整燈光與模型，過程耗時費力。

凱初的 AI 解決方案：書房配置與AI 快速生成
KAIFIRST 凱初設計 針對您的書房需求預先規劃配置，並透過 Stable Diffusion 組合材料、燈光與收納需求等關鍵字，為您快速生成多樣化的效果圖。
•	優點一：視覺提案的高效產出。無論是開放式展示架還是虛實結合的收納櫃，AI 能在短時間內產出具備材質質感的模擬圖。
•	優點二：材質與燈光的靈活探索。針對展示櫃的異材質拼接（如金屬與木質），我們能透過 AI 快速切換方案，讓您在短時間內欣賞並挑選最合意的創作成果。
•	優點三：精準掌握空間氛圍。高效的生成技術讓設計討論能直接聚焦在「視覺舒適度」與「實用機能」，確保最終的書房空間既具備專業感，又能展現您的個人品味。`
  },
  {
    id: '9',
    title: '風格隨心定義：凱初設計讓心儀配置呈現百變美學面貌',
    date: 'FEB 26, 2026',
    excerpt: '打破風格限制，以AI將家具配置轉化為專屬您的居家靈魂',
    image: 'https://img.youtube.com/vi/4z7SHBfzxyw/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/4z7SHBfzxyw',
    content: `當我們在網路上看到一張令人心動的室內配置圖，不論是座椅的擺放、桌子的選型或是展示櫃的層次都完美契合需求，唯獨「設計風格」與個人喜好不符時，傳統設計流程往往只能重新來過。
傳統設計的痛點：配置與風格的僵化連結
在傳統的 3D 建模與渲染過程中，若要將已完成的空間配置更換成完全不同的美學風格，幾乎等於推倒重來：
•	缺點一：風格重塑時程冗長。從現代風轉向古典風，所有材質球、燈光參數與裝飾線條都必須重新設定，渲染週期極長。
•	缺點二：美學嘗試的成本過高。屋主若想同時比較「北歐風」與「工業風」在同一配置下的效果，傳統流程需耗費設計師大量的重複勞動。
•	缺點三：風格移植的侷限性。單憑設計師口頭描述或材質板，屋主很難直觀感受「同一套家具配置」在不同風格濾鏡下的真實氛圍。

凱初的 AI 解決方案：AI的風格轉譯魔法
KAIFIRST 凱初設計 導入AI 技術，讓我們能保留您喜愛的空間配置架構，並精準進行風格轉換。
•	優點一：多元風格的極速預覽。原本的現代風設計，我們能迅速轉換成古典風、北歐風、LOFT 風及侘寂風，並精確展現各風格的獨特特徵與材質元素。
•	優點二：高效鎖定美學偏好。透過 AI 快速生成的對比圖，您可以同時欣賞各種風格的魅力，從而精準找出最觸動心靈的視覺方向。
•	優點三：設計靈感的深度開發。這項技術不僅縮短了溝通時程，更能協助您在既有的機能框架下，探索更多未曾想像過的美學可能性。`
  },
  {
    id: '10',
    title: '方界構築：當《Minecraft》方塊美學顯化為現實空間',
    date: 'MAR 05, 2026',
    excerpt: '從虛擬立方到內在思維的編碼，以幾何秩序宣告您的空間主張',
    image: 'https://img.youtube.com/vi/sv3YG3wWjyQ/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/sv3YG3wWjyQ',
    content: `「當虛擬立方與現實空間交疊，空間不再服從於柔性與圓滑，轉由邊界分明的形體與色塊構築。你的空間，你的編碼，你的宣言。」—— 凱初設計。本案以《Minecraft》電影美學為靈感，探索幾何秩序與個人態度的完美融合。
傳統設計的痛點：曲線平庸與風格妥協
在主流設計趨勢中，過度追求圓潤與柔和往往導致空間個性的喪失，對於追求「自我表達」的屋主而言，傳統流程存在以下瓶頸：
•	缺點一：視覺張力不足。傳統設計常過度依賴柔性曲線，難以呈現邊界分明的結構感，導致空間缺乏強烈的視覺衝擊。
•	缺點二：個人態度難以量化。流行文化（如數位遊戲美學）很難轉化為具體的建築語彙，傳統溝通容易將其簡化為「雜亂」而非「秩序」。
•	缺點三：材質與色塊的衝突感難以預覽。強烈對比的配色在傳統渲染中若缺乏精準調控，容易顯得突兀，讓屋主在決策時充滿不確定性。

凱初的 AI 解決方案：數位美學與AI的幾何重構
KAIFIRST 凱初設計 透過AI技術，將虛擬世界的幾何邏輯引入實體設計，實現「From my Minecraft, to your Mindcraft」的設計願景。
•	優點一：立方體式構圖的精準呈現。我們以塊狀元素重新編碼牆面與櫃體，透過 AI 快速模擬立體方塊的視覺層次，讓空間充滿幾何節奏感。
•	優點二：強烈對比配色的美學平衡。深淺材質與色彩在空間中彼此襯托，AI 能即時產出多種冷冽且具張力的配色方案，確保流行與反叛精神並存。
•	優點三：內在思維的視覺顯化。利用高效生成技術，我們能將您的個人態度轉化為獨一無二的空間編碼，讓方正與俐落取代平庸的妥協。
互動宣言： 每個空間編碼都有不同的個性，您最喜歡哪一個風格宣言呢？我的方塊世界，顯化您的內在思維。歡迎與 凱初設計 聯繫，開啟您的空間編碼之旅。`
  }
];
