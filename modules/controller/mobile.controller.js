import mobileCollection from "../model/mobile.model.js";

export const addMobile = async (req, res) => {
  res.render("addMobile");
};

export const saveMobile = async (req, res) => {
  const formFields = req.fields;
  const mobile = new mobileCollection({
    mobileName: formFields.mobileName,
    mobileModel: formFields.mobileModel,
    mobileDiscription: formFields.mobileDiscription,
  });
  await mobile.save();
  res.render("addMobile", { mobileDetails: mobile });
};

export const getMobile = async (req, res) => {
  const mobileList = await mobileCollection.find();
  res.render("mobileList", { mobileList });
};

export const editMobile = async (req, res) => {
  try {
    const id = req.params.id;
    const mobile = await mobileCollection.findOne({ _id: id });
    res.render("editMobile", { mobile });
  } catch (err) {
    res.render("editMobile");
  }
};

export const updateMobile = async (req, res) => {
  const id = req.params.id;
  const formFields = req.fields;
  const updatedDetails = await mobileCollection.updateOne(
    { _id: id },
    {
      mobileName: formFields.mobileName,
      mobileModel: formFields.mobileModel,
      mobileDiscription: formFields.mobileDiscription,
    }
  );
  if (updatedDetails.acknowledged && updatedDetails.modifiedCount == 1) {
    res.redirect("/mobile/");
  } else {
    res.render("editMobile", { errorDetails: updatedDetails });
  }
};
