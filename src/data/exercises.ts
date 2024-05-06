const exerciseList = {
    leg: [
      {
        name: "squat",
        image:
          "https://media.post.rvohealth.io/wp-content/uploads/2019/03/Female_Squat_Studio_732x549-thumbnail-2.jpg",
        description:
          "Squat down until your thighs are parallel to the floor. Keep your chest up and your back straight. Push through your heels to return to the starting position.",
      },
      {
        name: "deadlift",
        image:
          "https://media.hearstapps.com/loop/stagger-fixed-1553202064.mp4/poster.jpg",
        description:
          "Stand with your feet shoulder-width apart. Bend at your hips and knees to lower your body. Keep your back straight and your chest up. Push through your heels to return to the starting position.",
      },
      {
        name: "lunges",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/reverse-lunges-1544222100.jpg?crop=0.6235xw:1xh;center,top&resize=1200:*",
        description:
          "Stand with your feet shoulder-width apart. Step forward with one leg and lower your body until your front thigh is parallel to the floor. Push through your heel to return to the starting position.",
      },
      {
        name: "calf_raise",
        image: "https://i.ytimg.com/vi/H1b_tKeq3Us/maxresdefault.jpg",
        description:
          "Stand with your feet shoulder-width apart. Raise your heels off the ground as high as possible. Lower your heels back to the starting position.",
      },
      {
        name: "leg_press",
        image:
          "https://www.dmoose.com/cdn/shop/articles/1_511672c1-0ca0-4b6e-be72-fe90718e9ab1.jpg?v=1648897916",
        description:
          "Sit on the leg press machine with your feet shoulder-width apart. Push the weight up with your legs until they are almost straight. Lower the weight back to the starting position.",
      },
      {
        name: "leg_curl",
        image: "leg_curl.jpg",
        description:
          "Lie face down on the leg curl machine. Curl your legs up towards your glutes. Lower your legs back to the starting position.",
      },
      {
        name: "leg_extension",
        image: "leg_extension.jpg",
        description:
          "Sit on the leg extension machine with your feet shoulder-width apart. Extend your legs until they are almost straight. Lower your legs back to the starting position.",
      },
      {
        name: "glute_bridge",
        image: "glute_bridge.jpg",
        description:
          "Lie on your back with your knees bent and your feet flat on the floor. Push through your heels to raise your hips off the ground. Lower your hips back to the starting position.",
      },
      {
        name: "hip_thrust",
        image: "hip_thrust.jpg",
        description:
          "Sit on the floor with your upper back against a bench. Place a barbell across your hips. Push through your heels to raise your hips off the ground. Lower your hips back to the starting position.",
      },
      {
        name: "step_up",
        image: "step_up.jpg",
        description:
          "Stand in front of a bench or box. Step up onto the bench with one leg. Push through your heel to raise your body up. Step back down to the starting position.",
      },
    ],
    chest_push: [
      {
        name: "bench_press",
        image: "bench_press.jpg",
        description:
          "Lie on a bench with your feet flat on the floor. Lower the barbell to your chest. Push the barbell back up to the starting position.",
      },
      {
        name: "dumbbell_press",
        image: "dumbbell_press.jpg",
        description:
          "Lie on a bench with a dumbbell in each hand. Lower the dumbbells to your chest. Push the dumbbells back up to the starting position.",
      },
      {
        name: "incline_press",
        image: "incline_press.jpg",
        description:
          "Lie on an incline bench with your feet flat on the floor. Lower the barbell to your chest. Push the barbell back up to the starting position.",
      },
      {
        name: "dumbbell_fly",
        image: "dumbbell_fly.jpg",
        description:
          "Lie on a bench with a dumbbell in each hand. Lower the dumbbells out to the sides. Bring the dumbbells back together over your chest.",
      },
      {
        name: "push_up",
        image: "push_up.jpg",
        description:
          "Start in a plank position with your hands shoulder-width apart. Lower your body until your chest touches the ground. Push your body back up to the starting position.",
      },
      {
        name: "dip",
        image: "dip.jpg",
        description:
          "Hold onto parallel bars with your arms straight. Lower your body until your elbows are at a 90-degree angle. Push your body back up to the starting position.",
      },
      {
        name: "cable_fly",
        image: "cable_fly.jpg",
        description:
          "Stand in front of a cable machine with a handle in each hand. Pull the handles together in front of your chest. Return the handles to the starting position.",
      },
      {
        name: "chest_press",
        image: "chest_press.jpg",
        description:
          "Sit on the chest press machine with your feet flat on the floor. Push the handles forward until your arms are almost straight. Return the handles to the starting position.",
      },
      {
        name: "pec_deck",
        image: "pec_deck.jpg",
        description:
          "Sit on the pec deck machine with your back flat against the pad. Push the handles together in front of your chest. Return the handles",
      },
    ],
    chest_pull: [
      {
        name: "pull_up",
        image: "pull_up.jpg",
        description:
          "Hang from a pull-up bar with your hands shoulder-width apart. Pull your body up until your chin is above the bar. Lower your body back to the starting position.",
      },
      {
        name: "chin_up",
        image: "chin_up.jpg",
        description:
          "Hang from a pull-up bar with your hands shoulder-width apart and your palms facing you. Pull your body up until your chin is above the bar. Lower your body back to the starting position.",
      },
      {
        name: "lat_pulldown",
        image: "lat_pulldown.jpg",
        description:
          "Sit at a lat pulldown machine with your feet flat on the floor. Pull the bar down to your chest. Return the bar to the starting position.",
      },
      {
        name: "seated_row",
        image: "seated_row.jpg",
        description:
          "Sit at a seated row machine with your feet flat on the footrests. Pull the handles towards your chest. Return the handles to the starting position.",
      },
      {
        name: "bent_over_row",
        image: "bent_over_row.jpg",
        description:
          "Stand with your feet shoulder-width apart. Bend at your hips and knees to lower your body. Pull the barbell up to your chest. Return the barbell to the starting position.",
      },
      {
        name: "face_pull",
        image: "face_pull.jpg",
        description:
          "Attach a rope to a cable machine at eye level. Pull the rope towards your face. Return the rope to the starting position.",
      },
      {
        name: "reverse_fly",
        image: "reverse_fly.jpg",
        description:
          "Lie face down on an incline bench with a dumbbell in each hand. Raise the dumbbells out to the sides. Return the dumbbells to the starting position.",
      },
      {
        name: "shrug",
        image: "shrug.jpg",
        description:
          "Stand with your feet shoulder-width apart. Hold a dumbbell in each hand. Shrug your shoulders up towards your ears. Return your shoulders to the starting position.",
      },
      {
        name: "upright_row",
        image: "upright_row.jpg",
        description:
          "Stand with your feet shoulder-width apart. Hold a barbell in front of your thighs. Pull",
      },
    ],
  };
  
  export default exerciseList;