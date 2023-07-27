import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
    },
    firstName: {
      type: String,
      // required: true,
    },
    lastName: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
      // unique: true
    },
    password: {
      type: String,
      // required: true
    },

    restaurantName: {
      type: String,
      default: 'Restaurant',
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
        default: 'Lunch',
      },
      menu_3: {
        type: String,
        default: 'Dinner',
      },
    },

    bannerImage: {
      type: Array,
      default: [],
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
          nameFontFamily: 'Roboto', nameFontColor: '#fff', nameFontSize: '1rem', navBarColor: '#000', navBarFontColor: '#fff', navBarLogoColor: '#fff'
        },
        body: {
          bodyBgColor: '#fff', bodyFontFamily: 'Roboto', bodyFonttColor: '#000'
        },
        sideBar: {
          extraIcon: false, themeIconRadius: '', themeIconColorLine: '', themeIconBG: '', themeIconSolid: '', themeIconColorBorder: '',
        },
        categoryMotion: {
          categoryFontColor: '', categoryBoxClass: '', categoryBoxColor: '', categorySpanClass: '', categorySpanColor: '', categoryActiveClass: ''
        }

      }

    },
    onOffSetting: {
      type: 'Object',
      default: {
        menuName: true, banner: true, sideBar: true, filter: true, vetgeterian: true, vegan: true, gluten_free: true, halal: true,
        footbar: true, favoritHeart: true, feedBack: true
      }

    },
    qrCodeSetUp: {
      type: 'Object',
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

    link: {
      type: String,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model('Users', userSchema);

export default Users;
