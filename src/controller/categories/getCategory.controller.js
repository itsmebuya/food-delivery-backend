import { Categories } from "../../models/categories.model.js";

export const getCategory = async (req, res) => {
    try {
        const categoryData = await Categories.aggregate([
           { $lookup: {
                from: "foods", // The collection to join with
                localField: "_id", // The field in the current collection
                foreignField: "category", // The field in the other collection
                as: "foodCount" // The name of the array field to store the joined documents
              }
            },
            {
                $project: {
                    _id: 1,
                    categoryName:1,
                    foodCount: { $size:"$foodCount" }
                }
            }
        ]);
        res.send(categoryData).status(200)
    } catch (error) {
        res.send().status(400)
        console.log("Error occured ", error);
    }
}