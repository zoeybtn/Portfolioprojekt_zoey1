const exerciseList = {
    leg: [
      {
        name: "Squat",
        image:
          "public/squat.jpg",
        description:
          "Squat down until your thighs are parallel to the floor. Keep your chest up and your back straight. Push through your heels to return to the starting position.",
      },
      {
        name: "Deadlift",
        image:
          "public/deadlift.jpg",
        description:
          "Stand with your feet shoulder-width apart. Bend at your hips and knees to lower your body. Keep your back straight and your chest up. Push through your heels to return to the starting position.",
      },
      {
        name: "Lunges",
        image:
          "public/lunges.jpg",
        description:
          "Stand with your feet shoulder-width apart. Step forward with one leg and lower your body until your front thigh is parallel to the floor. Push through your heel to return to the starting position.",
      },
      {
        name: "Calf raise",
        image: "public/calf_raise.jpg",
        description:
          "Stand with your feet shoulder-width apart. Raise your heels off the ground as high as possible. Lower your heels back to the starting position.",
      },
      {
        name: "Leg press",
        image:
          "public/leg_press.jpg",
        description:
          "Sit on the leg press machine with your feet shoulder-width apart. Push the weight up with your legs until they are almost straight. Lower the weight back to the starting position.",
      },
      {
        name: "Leg curl",
        image: "public/leg_curl.jpg",
        description:
          "Lie face down on the leg curl machine. Curl your legs up towards your glutes. Lower your legs back to the starting position.",
      },
      {
        name: "Leg extension",
        image: "public/leg_extension.jpg",
        description:
          "Sit on the leg extension machine with your feet shoulder-width apart. Extend your legs until they are almost straight. Lower your legs back to the starting position.",
      },
      {
        name: "Glute bridge",
        image: "public/glute_bridge.jpg",
        description:
          "Lie on your back with your knees bent and your feet flat on the floor. Push through your heels to raise your hips off the ground. Lower your hips back to the starting position.",
      },
      {
        name: "Hip thrust",
        image: "public/hip_thrust.jpg",
        description:
          "Sit on the floor with your upper back against a bench. Place a barbell across your hips. Push through your heels to raise your hips off the ground. Lower your hips back to the starting position.",
      },
      {
        name: "Step up",
        image: "public/step_up.jpg",
        description:
          "Stand in front of a bench or box. Step up onto the bench with one leg. Push through your heel to raise your body up. Step back down to the starting position.",
      },
    ],
    chest_push: [
      {
        name: "Bench press",
        image: "https://caliberstrong.com/wp-content/uploads/2020/04/how-to-bench-press.jpg",
        description:
          "Lie on a bench with your feet flat on the floor. Lower the barbell to your chest. Push the barbell back up to the starting position.",
      },
      {
        name: "Dumbbell press",
        image: "https://i.ytimg.com/vi/dGqI0Z5ul4k/maxresdefault.jpg",
        description:
          "Lie on a bench with a dumbbell in each hand. Lower the dumbbells to your chest. Push the dumbbells back up to the starting position.",
      },
      {
        name: "Incline press",
        image: "https://blogscdn.thehut.net/app/uploads/sites/419/2021/07/shutterstock_68880238opt_hero_1625232204.jpg",
        description:
          "Lie on an incline bench with your feet flat on the floor. Lower the barbell to your chest. Push the barbell back up to the starting position.",
      },
      {
        name: "Dumbbell fly",
        image: "https://cdn.oxygenmag.com/wp-content/uploads/2021/03/bench-dumbbell-fly.jpg",
        description:
          "Lie on a bench with a dumbbell in each hand. Lower the dumbbells out to the sides. Bring the dumbbells back together over your chest.",
      },
      {
        name: "Push up",
        image: "https://builtforathletes.com/cdn/shop/articles/Press_up_records.jpg?v=1658742003",
        description:
          "Start in a plank position with your hands shoulder-width apart. Lower your body until your chest touches the ground. Push your body back up to the starting position.",
      },
      {
        name: "Dip",
        image: "https://cdn.shopify.com/s/files/1/0327/8461/3514/files/AG_00150.jpg",
        description:
          "Hold onto parallel bars with your arms straight. Lower your body until your elbows are at a 90-degree angle. Push your body back up to the starting position.",
      },
      {
        name: "Cable fly",
        image: "https://mirafit.co.uk/wp/wp-content/uploads/2023/02/cable-fly-using-Mirafit-Functional-Trainer-1024x683.jpg",
        description:
          "Stand in front of a cable machine with a handle in each hand. Pull the handles together in front of your chest. Return the handles to the starting position.",
      },
      {
        name: "Chest press",
        image: "https://rogersathletic.com/wp-content/uploads/2023/02/410602_vertical_chest_press_011__90124.1675216207.1280.1280-960x854.jpg",
        description:
          "Sit on the chest press machine with your feet flat on the floor. Push the handles forward until your arms are almost straight. Return the handles to the starting position.",
      },
      {
        name: "Pec deck",
        image: "https://atlantisstrength.com/app/uploads/2023/02/pec-deck-1-1100x660.png",
        description:
          "Sit on the pec deck machine with your back flat against the pad. Push the handles together in front of your chest. Return the handles",
      },
    ],
    chest_pull: [
      {
        name: "Pull up",
        image: "https://i.gifer.com/BVdS.gif",
        description:
          "Hang from a pull-up bar with your hands shoulder-width apart. Pull your body up until your chin is above the bar. Lower your body back to the starting position.",
      },
      {
        name: "Chin up",
        image: "https://legionathletics.com/wp-content/uploads/2022/07/Chin-Up.gif",
        description:
          "Hang from a pull-up bar with your hands shoulder-width apart and your palms facing you. Pull your body up until your chin is above the bar. Lower your body back to the starting position.",
      },
      {
        name: "Lat pulldown",
        image: "https://legionathletics.com/wp-content/uploads/2022/01/Lat-Pulldown.gif",
        description:
          "Sit at a lat pulldown machine with your feet flat on the floor. Pull the bar down to your chest. Return the bar to the starting position.",
      },
      {
        name: "Seated row",
        image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/cable-row-seated-narrow-grip.gif?resize=600%2C600&ssl=1",
        description:
          "Sit at a seated row machine with your feet flat on the footrests. Pull the handles towards your chest. Return the handles to the starting position.",
      },
      {
        name: "Bent over row",
        image: "https://www.garagegymreviews.com/wp-content/uploads/barbell-bent-over-row.gif",
        description:
          "Stand with your feet shoulder-width apart. Bend at your hips and knees to lower your body. Pull the barbell up to your chest. Return the barbell to the starting position.",
      },
      {
        name: "Face pull",
        image: "https://www.thirdspace.london/media/cable-face-pull-gif-2.gif",
        description:
          "Attach a rope to a cable machine at eye level. Pull the rope towards your face. Return the rope to the starting position.",
      },
      {
        name: "Reverse fly",
        image: "https://www.garagegymreviews.com/wp-content/uploads/Standing-reverse-fly.gif",
        description:
          "Lie face down on an incline bench with a dumbbell in each hand. Raise the dumbbells out to the sides. Return the dumbbells to the starting position.",
      },
      {
        name: "Shrug",
        image: "https://cdn.jefit.com/assets/img/exercises/gifs/42.gif",
        description:
          "Stand with your feet shoulder-width apart. Hold a dumbbell in each hand. Shrug your shoulders up towards your ears. Return your shoulders to the starting position.",
      },
      {
        name: "Upright row",
        image: "https://cdn.shopify.com/s/files/1/0449/8453/3153/files/How_to_Do_Upright_Rows_480x480.gif?v=1689923129",
        description:
          "Stand with your feet shoulder-width apart. Hold a barbell in front of your thighs. Pull",
      },
    ],
  };
  
  export default exerciseList;