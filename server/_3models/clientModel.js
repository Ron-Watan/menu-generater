import mongoose from 'mongoose';

const clientSchema = mongoose.Schema(
  {
    clientId: {
      type: String,
    },
    link: {
      type: String,
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
      type: 'String',
      default: '',
    },
  },
  { timestamps: true }
);

const Clients = mongoose.model('Clients', clientSchema);

export default Clients;
