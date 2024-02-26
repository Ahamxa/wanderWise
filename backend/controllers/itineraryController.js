export const itineraryController = async (req, res) => {
    try {
      const { place, days, companions, interests } = req.body;
      
      // Validations
      if (!place || !days || !companions || !interests) {
        return res.status(400).send({ error: "Field is missing" });
      }
  
      // Sample response object
      const sampleResponse = {
        trip: {
          heading: `Your trip to ${place} for ${days} days with your ${companions.join(" and ")}`
        },
        placesToStay: ["Place 1", "Place 2"], // Sample places to stay
        days: [
          {
            dayNumber: 1,
            description: "Day 1 description...",
            activities: [
              {
                name: "Activity Name 1",
                description: "Activity description..."
              },
              {
                name: "Activity Name 2",
                description: "Activity description..."
              }
            ]
          },
          {
            dayNumber: 2,
            description: "Day 2 description...",
            activities: [
              {
                name: "Activity Name 3",
                description: "Activity description..."
              },
              {
                name: "Activity Name 4",
                description: "Activity description..."
              }
            ]
          }
          // Add more days as needed
        ]
      };
  
      res.status(201).send({
        success: true,
        message: "Itinerary generated successfully",
        itinerary: sampleResponse
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in itinerary generation",
        error: error.message
      });
    }
  };
  