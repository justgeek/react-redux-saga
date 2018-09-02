const Enzyme = require("enzyme");
// TODO
// Remember to update this version when updating adapters
const EnzymeAdapter = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new EnzymeAdapter() });
