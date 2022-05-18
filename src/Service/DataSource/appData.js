// import Home from "../../pages/Home";

import { addressType } from "../../components/utilities/dictionaries";

var appData = {
  TopHeader: [
    {
      mail: "info@jasmin.com",
      phone: "01778-772327",
      message: "Trusted Online Shopping Site in Bangladesh",
    },
  ],
  MiddleHeader: [
    {
      logo: "/contents/assets/images/logo-01.png",
    },
  ],
  BottomHeader: [
    {
      dropDownCategoryName: "Shop Categories",
      dropDownCategoryItem: [
        {
          categoryId: 1,
          visible: true,
          categoryName: "Medicine",
          subCategory: [
            {
              subCategoryId: 1,
              subCategoryName: "Cumin Powder",
            },
            {
              subCategoryId: 2,
              subCategoryName: "Termeric Powder",
            },
            {
              subCategoryId: 3,
              subCategoryName: "Chilli Powder",
            },
            {
              subCategoryId: 4,
              subCategoryName: "Coriander Powder",
            },
            {
              subCategoryId: 5,
              subCategoryName: "Garam Mosala",
            },
            {
              subCategoryId: 6,
              subCategoryName: "Cardamom",
            },
            {
              subCategoryId: 7,
              subCategoryName: "Clove",
            },
            {
              subCategoryId: 8,
              subCategoryName: "Black Paper",
            },
            {
              subCategoryId: 9,
              subCategoryName: "Mace",
            },
          ],
        },
        {
          categoryId: 2,
          visible: true,
          categoryName: "Surgical Product",
          subCategory: [
            {
              subCategoryId: 1,
              subCategoryName: "Mustard OId",
            },
            {
              subCategoryId: 2,
              subCategoryName: "Coconut Oil",
            },
            {
              subCategoryId: 3,
              subCategoryName: "Sorisar Oil",
            },
            {
              subCategoryId: 4,
              subCategoryName: "Tibbat Oil",
            },
          ],
        },
        {
          categoryId: 3,
          visible: true,
          categoryName: "Medical Device",
          subCategory: [
            {
              subCategoryId: 1,
              subCategoryName: "Brown Atta",
            },
            {
              subCategoryId: 2,
              subCategoryName: "Wheat Flour",
            },
            {
              subCategoryId: 3,
              subCategoryName: "Mixed Pulse Flour",
            },
            {
              subCategoryId: 4,
              subCategoryName: "Wheat Flour",
            },
          ],
        },
        {
          categoryId: 4,
          visible: false,
          categoryName: "Dal or Lentil",
          subCategory: [
            {
              subCategoryId: 1,
              subCategoryName: "Lentil",
            },
            {
              subCategoryId: 2,
              subCategoryName: "Mug Dal",
            },
            {
              subCategoryId: 3,
              subCategoryName: "Kashmeri Dal",
            },
            {
              subCategoryId: 4,
              subCategoryName: "Mashkalai Dal",
            },
          ],
        },
        {
          categoryId: 5,
          visible: false,
          categoryName: "Shemai & Suzi",
          subCategory: [
            {
              subCategoryId: 1,
              subCategoryName: "Jesmine Laccha Shemai",
            },
            {
              subCategoryId: 2,
              subCategoryName: "Jesmine Kichmich",
            },
            {
              subCategoryId: 3,
              subCategoryName: "Jesmine Dalda",
            },
            {
              subCategoryId: 4,
              subCategoryName: "jasmine Suzi",
            },
          ],
        },
        {
          categoryId: 6,
          visible: false,
          categoryName: "Tea & Coffeae",
          subCategory: [
            {
              subCategoryId: 1,
              subCategoryName: "Raj Black Tea",
            },
          ],
        },
        {
          categoryId: 7,
          visible: false,
          categoryName: "Pickle",
          subCategory: [
            {
              subCategoryId: 1,
              subCategoryName: "Jasmine Mongo Pickle",
            },
            {
              subCategoryId: 2,
              subCategoryName: "Jasmine Garlic Pickle",
            },
          ],
        },
      ],
    },
  ],
  Banner: [
    {
      id: 1,
      image: "/contents/assets/images/slider/b1.png",
    },
    {
      id: 2,
      image: "/contents/assets/images/slider/b2.png",
    },
    {
      id: 3,
      image: "/contents/assets/images/slider/b3.png",
    },
    {
      id: 4,
      image: "/contents/assets/images/slider/b4.png",
    },
    {
      id: 5,
      image: "/contents/assets/images/slider/b5.png",
    },
    {
      id: 6,
      image: "/contents/assets/images/slider/b6.png",
    },
    {
      id: 7,
      image: "/contents/assets/images/slider/b7.png",
    },
  ],
  categoryProducts: [
    {
      id: "8efa51ed-4485-4040-8ef9-00bef293c809",
      Nm: "Cumin",
      //   GN: "LEVOTHYROXINE SODIUM",
      St: "10 gm",
      //   Ct: "Tab",
      //   Sp: "GSK BANGLADESH LTD",
      MRP: 255,
      Ds: 10,
      //   Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
      //   Tp: "0",
      Stk: 0,
      image: "/contents/assets/images/product/p1.jpg",
      //   brand_id:1,
      category_id: 1,
      subCategory_id: 1,
      //   subCategory_item_id:1,
      offer_status: false,
      //   FestivalCategory_id:null,
      //   created_at:(new Date().getDate()+10),
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "412fede5-23d8-4b73-97b4-014255894963",
      Nm: "Cisplatin ",
      GN: "DURCHSTECHFLASCHE IM ONCOSAFE ",
      St: "10 mg",
      Ct: "Injection",
      Sp: "NOVARTIS (BANGLADESH) LTD.",
      MRP: 419,
      Ds: 15,
      Pt: "aef955ba-a5f0-4f2f-8516-85aa03073f7dinjection (1).jpg",
      Tp: "0",
      Stk: 0,
      image: "/contents/assets/images/product/p2.jpg",
      brand_id: 1,
      category_id: 2,
      subCategory_id: 1,
      subCategory_item_id: 2,
      offer_status: true,
      FestivalCategory_id: null,
      created_at: new Date().getDate() + 11,
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "6d267000-1a99-40b2-a00c-0c1e1376d2e7",
      Nm: "Acticikid ",
      GN: "VITAMIN C",
      St: "50 gm",
      Ct: "Tab",
      Sp: "CATALYST HEALTH CARE",
      MRP: 950,
      Ds: 0,
      Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
      Tp: "0",
      Stk: 0,
      image: "/contents/assets/images/product/p3.jpg",
      brand_id: 1,
      category_id: 3,
      subCategory_id: 1,
      subCategory_item_id: 3,
      offer_status: false,
      FestivalCategory_id: null,
      created_at: new Date().getDate() - 7,
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "a7bb9181-f113-429a-a7de-133177d7731f",
      Nm: "Lactogin",
      GN: "IMPROVE LACTATION",
      St: "100 mg",
      Ct: "Cap",
      Sp: "MIX MEDICAL",
      MRP: 25,
      Ds: 20,
      Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
      Tp: "0",
      Stk: 60,
      image: "/contents/assets/images/product/p4.jpg",
      brand_id: 2,
      category_id: 1,
      subCategory_id: 1,
      subCategory_item_id: 4,
      offer_status: true,
      FestivalCategory_id: 3,
      created_at: new Date().getDate() - 7,
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "f93d5501-d2bd-4a50-991b-1dd256da99c3",
      Nm: "Anxio",
      GN: "BROMAZEPAM",
      St: "300 MG",
      Ct: "Tab",
      Sp: "UNIMED\u0026UNIHEALTH MFG.LTD",
      MRP: 45,
      Ds: 10,
      Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
      Tp: "0",
      Stk: 20,
      image: "/contents/assets/images/product/p5.jpg",
      brand_id: 3,
      category_id: 2,
      subCategory_id: 1,
      subCategory_item_id: 5,
      offer_status: false,
      FestivalCategory_id: null,
      created_at: new Date().getDate() - 7,
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "c2ed15c8-a605-4d34-9ff3-22736b55b3c6",
      Nm: "Himalaya ",
      GN: "BEAUTY CREAM",
      St: "50 GM",
      Ct: "CREAM (TOILETIES)",
      Sp: "RIGS MARKETING",
      MRP: 450,
      Ds: 0,
      Pt: "",
      Tp: "0",
      Stk: 3,
      image: "/contents/assets/images/product/p1.jpg",
      brand_id: 4,
      category_id: 3,
      subCategory_id: 1,
      subCategory_item_id: 4,
      offer_status: true,
      FestivalCategory_id: null,
      created_at: new Date().getDate() - 7,
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "0504a7b4-deb8-4f39-9e0c-27b94cf33117",
      Nm: "Fulspec",
      GN: "MEROPENEM",
      St: "100 gm",
      Ct: "Injection IV",
      Sp: "ACME LABORATORIES LTD.",
      MRP: 1208.15,
      Ds: 25,
      Pt: "5b84c53a-e20b-4fea-b862-4a7a11e98ae3injection (1).jpg",
      Tp: "0",
      Stk: 0,
      image: "/contents/assets/images/product/p2.jpg",
      brand_id: 5,
      category_id: 1,
      subCategory_id: 3,
      subCategory_item_id: 1,
      offer_status: false,
      FestivalCategory_id: null,
      created_at: new Date().getDate() - 7,
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "1c05725d-67a1-4d2c-9052-8f77fe75494e",
      Nm: "Onriva ",
      GN: "Glycopyrronium,Glicopironio",
      St: "50 GM",
      Ct: "Cap",
      Sp: "BEXIMCO CONSUMER LTD",
      MRP: 2100,
      Ds: 15,
      Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
      Tp: "0",
      Stk: 1,
      image: "/contents/assets/images/product/p3.jpg",
      brand_id: 6,
      category_id: 2,
      subCategory_id: 5,
      subCategory_item_id: 4,
      offer_status: true,
      FestivalCategory_id: 3,
      created_at: new Date().getDate(),
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "169836ac-ee6b-4129-9cb2-9a19cd371a1a",
      Nm: "Milam",
      GN: "MIDAZOLAM",
      St: "150 mg",
      Ct: "Injection IM/IV",
      Sp: "TRANSCOM DISTRIBUTION COMPANY LTD(SK+F)",
      MRP: 120,
      Ds: 35,
      Pt: "8875663c-91cb-47c5-ac2a-84972a64173finjection (1).jpg",
      Tp: "0",
      Stk: 0,
      image: "/contents/assets/images/product/p4.jpg",
      brand_id: 7,
      category_id: 3,
      subCategory_id: 3,
      subCategory_item_id: 2,
      offer_status: false,
      FestivalCategory_id: 1,
      created_at: new Date().getDate(),
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "04608b80-ea20-4520-b755-ba2f3356c649",
      Nm: "Igloo ",
      GN: "ICE CREAM",
      St: "500 gm",
      Ct: "Toiletries",
      Sp: "IGLOO ICE CREAM",
      MRP: 50,
      Ds: 0,
      Pt: "",
      Tp: "0",
      Stk: 0,
      image: "/contents/assets/images/product/p5.jpg",
      brand_id: 8,
      category_id: 1,
      subCategory_id: 4,
      subCategory_item_id: 5,
      offer_status: true,
      FestivalCategory_id: null,
      created_at: new Date().getDate(),
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "8efa51ed-4485-4040-8ef9-00bef293c809",
      Nm: "Electoxin",
      GN: "LEVOTHYROXINE",
      St: "50 gm",
      Ct: "Tab",
      Sp: "GSK BANGLADESH LTD",
      MRP: 255,
      Ds: 25,
      Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
      Tp: "0",
      Stk: 0,
      image: "/contents/assets/images/product/p1.jpg",
      brand_id: 2,
      category_id: 2,
      subCategory_id: 2,
      subCategory_item_id: 3,
      offer_status: false,
      FestivalCategory_id: 3,
      created_at: new Date().getDate(),
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "412fede5-23d8-4b73-97b4-014255894963",
      Nm: "Cisplatin ",
      GN: "DURCHSTECHFLASCHE IM ONCOSAFE ",
      St: "10 mg",
      Ct: "Injection",
      Sp: "NOVARTIS (BANGLADESH) LTD.",
      MRP: 419,
      Ds: 50,
      Pt: "aef955ba-a5f0-4f2f-8516-85aa03073f7dinjection (1).jpg",
      Tp: "0",
      Stk: 0,
      image: "/contents/assets/images/product/p2.jpg",
      brand_id: 14,
      category_id: 3,
      subCategory_id: 1,
      subCategory_item_id: 3,
      offer_status: true,
      FestivalCategory_id: 1,
      created_at: new Date().getDate(),
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "6d267000-1a99-40b2-a00c-0c1e1376d2e7",
      Nm: "Acticikid ",
      GN: "VITAMIN C",
      St: "200 gm",
      Ct: "Tab",
      Sp: "CATALYST HEALTH CARE",
      MRP: 950,
      Ds: 35,
      Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
      Tp: "0",
      Stk: 0,
      image: "/contents/assets/images/product/p3.jpg",
      brand_id: 15,
      category_id: 1,
      subCategory_id: 3,
      subCategory_item_id: 4,
      offer_status: false,
      FestivalCategory_id: 2,
      created_at: new Date().getDate(),
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "a7bb9181-f113-429a-a7de-133177d7731f",
      Nm: "Lactogin",
      GN: "IMPROVE LACTATION",
      St: "100 gm",
      Ct: "Cap",
      Sp: "MIX MEDICAL",
      MRP: 25,
      Ds: 20,
      Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
      Tp: "0",
      Stk: 60,
      image: "/contents/assets/images/product/p4.jpg",
      brand_id: 16,
      category_id: 2,
      subCategory_id: 3,
      subCategory_item_id: 5,
      offer_status: true,
      FestivalCategory_id: 3,
      created_at: new Date().getDate(),
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "f93d5501-d2bd-4a50-991b-1dd256da99c3",
      Nm: "Anxio",
      GN: "BROMAZEPAM",
      St: "300 ml",
      Ct: "Tab",
      Sp: "UNIMED\u0026UNIHEALTH MFG.LTD",
      MRP: 4.5,
      Ds: 10,
      Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
      Tp: "0",
      Stk: 20,
      image: "/contents/assets/images/product/p5.jpg",
      brand_id: 1,
      category_id: 3,
      subCategory_id: 3,
      subCategory_item_id: 4,
      offer_status: false,
      FestivalCategory_id: null,
      created_at: new Date().getDate(),
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "c2ed15c8-a605-4d34-9ff3-22736b55b3c6",
      Nm: "beauty",
      GN: "BEAUTY CREAM",
      St: "50 gm",
      Ct: "CREAM (TOILETIES)",
      Sp: "RIGS MARKETING",
      MRP: 450,
      Ds: 0,
      Pt: "",
      Tp: "0",
      Stk: 3,
      image: "/contents/assets/images/product/p1.jpg",
      brand_id: 1,
      category_id: 1,
      subCategory_id: 3,
      subCategory_item_id: 4,
      offer_status: true,
      FestivalCategory_id: 1,
      created_at: new Date().getDate(),
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "0504a7b4-deb8-4f39-9e0c-27b94cf33117",
      Nm: "Fulspec",
      GN: "MEROPENEM",
      St: "100 gm",
      Ct: "Injection IV",
      Sp: "ACME LABORATORIES LTD.",
      MRP: 1208.15,
      Ds: 0,
      Pt: "5b84c53a-e20b-4fea-b862-4a7a11e98ae3injection (1).jpg",
      Tp: "0",
      Stk: 0,
      image: "/contents/assets/images/product/p2.jpg",
      brand_id: 1,
      category_id: 2,
      subCategory_id: 3,
      subCategory_item_id: 5,
      offer_status: false,
      FestivalCategory_id: 2,
      created_at: new Date().getDate(),
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "1c05725d-67a1-4d2c-9052-8f77fe75494e",
      Nm: "Onriva",
      GN: "Glycopyrronium,Glicopironio",
      St: "50 gm",
      Ct: "Cap",
      Sp: "BEXIMCO CONSUMER LTD",
      MRP: 2100,
      Ds: 15,
      Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
      Tp: "0",
      Stk: 1,
      image: "/contents/assets/images/product/p3.jpg",
      brand_id: 4,
      category_id: 3,
      subCategory_id: 3,
      subCategory_item_id: 4,
      offer_status: true,
      FestivalCategory_id: 3,
      created_at: new Date().getDate(),
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "169836ac-ee6b-4129-9cb2-9a19cd371a1a",
      Nm: "Milam",
      GN: "MIDAZOLAM",
      St: "15 mg",
      Ct: "Injection IM/IV",
      Sp: "TRANSCOM DISTRIBUTION COMPANY LTD(SK+F)",
      MRP: 120,
      Ds: 10,
      Pt: "8875663c-91cb-47c5-ac2a-84972a64173finjection (1).jpg",
      Tp: "0",
      Stk: 0,
      image: "/contents/assets/images/product/p4.jpg",
      brand_id: 13,
      category_id: 1,
      subCategory_id: 3,
      subCategory_item_id: 4,
      offer_status: false,
      FestivalCategory_id: 1,
      created_at: new Date().getDate() - 5,
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
    {
      id: "04608b80-ea20-4520-b755-ba2f3356c649",
      Nm: "Igloo ",
      GN: "ICE CREAM",
      St: "200 mg",
      Ct: "Toiletries",
      Sp: "IGLOO ICE CREAM",
      MRP: 50,
      Ds: 0,
      Pt: "",
      Tp: "0",
      Stk: 0,
      image: "/contents/assets/images/product/p5.jpg",
      brand_id: 12,
      category_id: 2,
      subCategory_id: 5,
      subCategory_item_id: 1,
      offer_status: true,
      FestivalCategory_id: 2,
      created_at: new Date().getDate() - 5,
      offer_image: "/contents/assets/images/product/sp1.jpg",
      productInfo:
        "Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.",
    },
  ],
  BottomActiveAddress: [
    {
      id: addressType.Home,
      type: "Home",
    },
    {
      id: addressType.Office,
      type: "Office",
    },
    {
      id: addressType.HomeTown,
      type: "Home Town",
    },
  ],
  Footer: [
    {
      Address: "Jasmine Food & Beverage 37/B Dilu Road,New Eskaton, Dhaka",
      Mobile: "880258155933",
      Email: "info@jasmin.com",
      Image: "/contents/assets/images/logo-01.png",
    },
  ],
};
export default appData;
