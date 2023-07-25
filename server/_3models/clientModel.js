import mongoose from 'mongoose';

const clientSchema = mongoose.Schema(
  {
    clientId: {
      type: String,
    },
    link: {
      type: String,
    },
    restaurantName: {
      type: String,
      default: '',
    },
    menu: {
      type: Array,
      default: [],
    },
    menuName: {
      type: Object,
      default: {},
    },
    bannerImage: {
      type: Array,
      default: [],
    },
    languageSetup: {
      type: Object,
      default: {},
    },
    timeSetup: {
      type: Object,
      default: {},
    },
    themeSetup: {
      type: Object,
      default: {},
    },
    onOffSetting: {
      type: Object,
      default: {},
    },
    unseenFeedBack: {
      type: Array,
      default: [],
    },
    seenFeedBack: {
      type: Array,
      default: []
    },
    onOffSetting: {
      type: 'Object',
      default: {},
    }

  },
  { timestamps: true }
);

const Clients = mongoose.model('Clients', clientSchema);

export default Clients;
