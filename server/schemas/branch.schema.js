import mongoose from "mongoose";

const branchSchema = mongoose.Schema({
  _id: Number,
  name: String,
  manager: String,
  location: String,
  openedDate: String,
  type: String,
  saleArea: Number,
  backArea: Number,
  allArea: Number,
  amount: Object,
  cost: Object,
  score: Array,
});

export default mongoose.model("branchcontents", branchSchema);
