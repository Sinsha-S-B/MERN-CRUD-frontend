import clientModel from  "../model/clientModel.js"

export const getDetails = async (req, res) => {
  try {
    // const name = await clientModel.find();
    // res.send(name);

    res.send("haiiiiiii ssssssssssssssssssssss");
  } catch (error) {
    console.log({ error });
  }
};

export const saveDetails = (req, res) => {
  try {
    const { details } = req.body;
    clientModel
      .create({ details })
      .then((data) => {
        console.log("saved successfully");
        res.status(201).send(data);
      })
      .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "something went wroung" });
      });
  } catch (error) {
    console.log(error);
  }
};

export const updateDetails = (req, res) => {
  try {
    const { clientId } = req.params;
    const { details } = req.body;

    clientModel
      .findByIdAndUpdate(clientId, { details })
      .then(() => {
        res.send("updated successfully");
      })
      .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "something went wroung" });
      });
  } catch (error) {
    console.log(error);
  }
};

export const deleteDetails = (req, res) => {
    try {
      const { clientId } = req.params;
  
      clientModel
        .findByIdAndDelete(clientId)
        .then(() => {
          res.send("deleted successfully");
        })
        .catch((err) => {
          console.log(err);
          res.send({ error: err, msg: "something went wroung" });
        });
    } catch (error) {
      console.log(error);
    }
  };