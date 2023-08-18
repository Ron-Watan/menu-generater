import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    restaurantName: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
      unique: true
    },
    onOffSetting: {
      type: 'Object',
      default: {},
    },
    extraInfo: {
      type: 'Object',
      default: {},
    },
    // password: {
    //   type: String,
    //   required: true,
    // },





    firstName: {
      type: String,
      // required: true,
    },
    lastName: {
      type: String,
      // required: true,
    },


    menu: {
      type: Array,
      default: [],
    },
    menuName: {
      menu_1: {
        type: String,
        default: 'My Menu',
      },
      menu_2: {
        type: String,
        default: 'Dinner',
      },
      menu_3: {
        type: String,
        default: 'Kids Menu',
      },
    },

    bannerImage: {
      type: Array,
      default: [],
    },
    bannerNumber: {
      type: Number,

    },
    languageSetup: {
      type: Object,
      default: {
        onLanguage_2: false,
        language_1: 'English',
        code_1: 'EN',
        symbol_1: '$',
        style_1: false,
        followed_1: true,
        language_2: '',
        code_2: '',
        symbol_2: '',
        style_2: true,
        followed_2: true,
      },
    },
    timeSetup: {
      type: Object,
      default: {
        timeType: true,
        allDayType: { menu_1: true, menu_2: false, menu_3: false },
        codeSelectType: { menu_1: '', menu_2: '', menu_3: '' },
        selectType: {
          menu_1: { start: '', end: '' },
          menu_2: { start: '', end: '' },
          menu_3: { start: '', end: '' },
        },
      },
    },
    themeSetup: {
      type: 'Object',
      default: {
        navAndFootBar: {
          nameFontFamily: 'Inter', nameFontColor: '#fff', nameFontSize: '1.6rem', navBarColor: '#000', navBarFontColor: '#fff', navBarLogoColor: '#fff'
        },
        body: {
          bodyBgColor: '#fff', bodyFontFamily: 'Inter', bodyFonttColor: '#000', bodyFontSize: '1'
        },
        sideBar: {
          extraIcon: false, themeIconRadius: '1.5rem', themeIconColorLine: '#555', themeIconBG: '#fff', themeIconSolid: 'none', themeIconColorBorder: '',
        },
        categoryMotion: {
          categoryFontColor: '#fff', categoryBoxClass: 'category-Custom-BarLine', categoryBoxColor: '#000',
          categorySpanClass: 'category-Custom-Line', categorySpanColor: '#777', categoryActiveClass: 'category-Custom-Line-Active',
          categoryPhotoSize: '10rem'
        }

      }

    },
    onOffSetting: {
      type: 'Object',
      default: {
        menuName: true, banner: true, sideBar: true, filter: true, vetgeterian: true, vegan: true, gluten_free: true, halal: true,
        description: true, accordian: true, footbar: true, langIcon: true, favoritHeart: true, feedBack: true
      }

    },
    qrCodeSetUp: {
      type: 'Object',
      default: {
        levelCode: 'Q', dotOption: 'square', cornersOption: 'square', dotCornersOption: 'square', colorQrCode: '#000', bgQrCode: '#fff',
        sizeQr: 8, sizeQrPx: 300, logoQr: ''
      },
    },
    unseenFeedBack: {
      type: Array,
      default: [],
    },
    seenFeedBack: {
      type: Array,
      default: [],
    },
    clientId: {
      type: String,
    },
    bannerImage: {
      type: Array,
      default: [],
    },

  },
  { timestamps: true }
);

const Users = mongoose.model('Users', userSchema);

export default Users;
