const employeeData = [
    {
      id: 1,
      name: "ໄຊປັນຍາ ພົງສາ",
      age: "20",
      gender: "ຊາຍ",
      role: "staff",
      position: "ອາຈານ",
      address: "ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ",
      responsibilty: "ພາສາອັງກິດ, ໄອຊີທີ",
      experience: "4",
      degree: "ປະລິນຍາຕີເຕັກໂນໂລຊີຂໍມູນຂ່າວສານ, ປະລິນຍາໂທບໍລິຫານການສຶກສາ",
      imgSrc: "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      seract_id: ["1","3"]
    },
    {
      id: 2,
      name: "ສົມພອນ ໄຊຍະລາດ",
      age: "22",
      gender: "ຊາຍ",
      role: "manager",
      position: "ອຳນວຍການ",
      address: "ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ",
      responsibilty: "ພາສາອັງກິດ, ໄອຊີທີ",
      experience: "4",
      degree: "ປະລິນຍາຕີເຕັກໂນໂລຊີຂໍມູນຂ່າວສານ, ປະລິນຍາໂທບໍລິຫານການສຶກສາ",
      imgSrc: "https://cdn.discordapp.com/attachments/987969095423127553/987969127228530768/Ellipse_24.png",
      seract_id: ["1","3"]
    },
    {
      id: 3,
      name: "ອາຫຼຽງ ແກ້ວລະນີ",
      age: "21",
      gender: "ຊາຍ",
      role: "manager",
      position: "ຫົວໜ້າພະແນກການເງິນ",
      address: "ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ",
      responsibilty: "ພາສາອັງກິດ, ໄອຊີທີ",
      experience: "4",
      degree: "ປະລິນຍາຕີເຕັກໂນໂລຊີຂໍມູນຂ່າວສານ, ປະລິນຍາໂທບໍລິຫານການສຶກສາ",
      imgSrc: "https://cdn.discordapp.com/attachments/987969095423127553/987969127228530768/Ellipse_24.png",
      seract_id: ["1"]
    },
    {
      id: 4,
      name: "ຈັນສະມອນ ວົງຄຳຊາວ",
      age: "22",
      gender: "ຍິງ",
      role: "manager",
      position: "ອຳນວຍການ",
      address: "ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ",
      responsibilty: "ພາສາອັງກິດ, ໄອຊີທີ",
      experience: "4",
      degree: "ປະລິນຍາຕີເຕັກໂນໂລຊີຂໍມູນຂ່າວສານ, ປະລິນຍາໂທບໍລິຫານການສຶກສາ",
      imgSrc: "https://cdn.discordapp.com/attachments/987969095423127553/987969127228530768/Ellipse_24.png",
      seract_id: []
    },
    {
      id: 5,
      name: "ຈັນສະມອນ ວົງຄຳຊາວ 2",
      age: "22",
      gender: "ຍິງ",
      role: "manager",
      position: "ອຳນວຍການ",
      address: "ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ",
      responsibilty: "ພາສາອັງກິດ, ໄອຊີທີ",
      experience: "4",
      degree: "ປະລິນຍາຕີເຕັກໂນໂລຊີຂໍມູນຂ່າວສານ, ປະລິນຍາໂທບໍລິຫານການສຶກສາ",
      imgSrc: "https://cdn.discordapp.com/attachments/987969095423127553/987969127228530768/Ellipse_24.png",
      seract_id: ["1","3"]
    },
    {
      id: 6,
      name: "ຈັນສະມອນ ວົງຄຳຊາວ 3",
      age: "22",
      gender: "ຍິງ",
      role: "staff",
      position: "ອາຈານ",
      address: "ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ",
      responsibilty: "ພາສາອັງກິດ, ໄອຊີທີ",
      experience: "4",
      degree: "ປະລິນຍາຕີເຕັກໂນໂລຊີຂໍມູນຂ່າວສານ, ປະລິນຍາໂທບໍລິຫານການສຶກສາ",
      imgSrc: "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      seract_id: ["1"]
    },
    {
      id: 7,
      name: "ຈັນສະມອນ ວົງຄຳຊາວ 4",
      age: "22",
      gender: "ຍິງ",
      role: "staff",
      position: "ອາຈານ",
      address: "ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ",
      responsibilty: "ພາສາອັງກິດ, ໄອຊີທີ",
      experience: "4",
      degree: "ປະລິນຍາຕີເຕັກໂນໂລຊີຂໍມູນຂ່າວສານ, ປະລິນຍາໂທບໍລິຫານການສຶກສາ",
      imgSrc: "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      seract_id: []
    },
    {
      id: 8,
      name: "ຈັນສະມອນ ວົງຄຳຊາວ 5",
      age: "22",
      gender: "ຍິງ",
      role: "staff",
      position: "ອາຈານ",
      address: "ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ",
      responsibilty: "ພາສາອັງກິດ, ໄອຊີທີ",
      experience: "4",
      degree: "ປະລິນຍາຕີເຕັກໂນໂລຊີຂໍມູນຂ່າວສານ, ປະລິນຍາໂທບໍລິຫານການສຶກສາ",
      imgSrc: "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      seract_id: []
    },
    {
      id: 9,
      name: "ຈັນສະມອນ ວົງຄຳຊາວ 6",
      age: "22",
      gender: "ຍິງ",
      role: "staff",
      position: "ອາຈານ",
      address: "ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ",
      responsibilty: "ພາສາອັງກິດ, ໄອຊີທີ",
      experience: "4",
      degree: "ປະລິນຍາຕີເຕັກໂນໂລຊີຂໍມູນຂ່າວສານ, ປະລິນຍາໂທບໍລິຫານການສຶກສາ",
      imgSrc: "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      seract_id: []
    },
    {
      id: 10,
      name: "ຈັນສະມອນ ວົງຄຳຊາວ 7",
      age: "22",
      gender: "ຍິງ",
      role: "staff",
      position: "ອາຈານ",
      address: "ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ",
      responsibilty: "ພາສາອັງກິດ, ໄອຊີທີ",
      experience: "4",
      degree: "ປະລິນຍາຕີເຕັກໂນໂລຊີຂໍມູນຂ່າວສານ, ປະລິນຍາໂທບໍລິຫານການສຶກສາ",
      imgSrc: "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      seract_id: []
    },
    {
      id: 11,
      name: "ຈັນສະມອນ ວົງຄຳຊາວ 8",
      age: "22",
      gender: "ຍິງ",
      role: "manager",
      position: "CEO",
      address: "ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ",
      responsibilty: "ພາສາອັງກິດ, ໄອຊີທີ",
      experience: "4",
      degree: "ປະລິນຍາຕີເຕັກໂນໂລຊີຂໍມູນຂ່າວສານ, ປະລິນຍາໂທບໍລິຫານການສຶກສາ",
      imgSrc: "https://cdn.discordapp.com/attachments/987969095423127553/987969127228530768/Ellipse_24.png",
      seract_id: []
    },
    {
      id: 12,
      name: "ຈັນສະມອນ ວົງຄຳຊາວ 9",
      age: "22",
      gender: "ຍິງ",
      role: "manager",
      position: "CTO",
      address: "ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ",
      responsibilty: "ພາສາອັງກິດ, ໄອຊີທີ",
      experience: "4",
      degree: "ປະລິນຍາຕີເຕັກໂນໂລຊີຂໍມູນຂ່າວສານ, ປະລິນຍາໂທບໍລິຫານການສຶກສາ",
      imgSrc: "https://cdn.discordapp.com/attachments/987969095423127553/987969127228530768/Ellipse_24.png",
      seract_id: []
    },
    {
      id: 13,
      name: "ຈັນສະມອນ ວົງຄຳຊາວ 10",
      age: "22",
      gender: "ຍິງ",
      role: "staff",
      position: "assistant",
      address: "ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ",
      responsibilty: "ພາສາອັງກິດ, ໄອຊີທີ",
      experience: "4",
      degree: "ປະລິນຍາຕີເຕັກໂນໂລຊີຂໍມູນຂ່າວສານ, ປະລິນຍາໂທບໍລິຫານການສຶກສາ",
      imgSrc: "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      seract_id: []
    },
  ]

const seractData = [
    {
      id: 1,
      name: "Service Name 1",
      type: "service",
      timeStamp: "18-06-2022",
      imgSrc: "http://placehold.jp/500x375.png",
      detail: "Detail This suggests others may use this approach to design a variety of living machines to safely deliver drugs inside the human body",
      imgSlideSrc: [
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 1"
        },
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 2"
        },
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 3"
        },
      ]
    },
    {
      id: 2,
      name: "Service Name 2",
      type: "service",
      timeStamp: "18-06-2022",
      imgSrc: "http://placehold.jp/500x375.png",
      detail: "Detail This suggests others may use this approach to design a variety of living machines to safely deliver drugs inside the human body",
      imgSlideSrc: [
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 1"
        },
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 2"
        },
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 3"
        },
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 4"
        },
      ]
    },
    {
      id: 3,
      name: "Service Name 3",
      type: "service",
      timeStamp: "18-06-2022",
      imgSrc: "http://placehold.jp/500x375.png",
      detail: "Detail This suggests others may use this approach to design a variety of living machines to safely deliver drugs inside the human body",
      imgSlideSrc: []
    },
    {
      id: 4,
      name: "Service Name 4",
      imgSrc: "http://placehold.jp/500x375.png",
      type: "service",
      timeStamp: "18-06-2022",
      detail: "Detail This suggests others may use this approach to design a variety of living machines to safely deliver drugs inside the human body",
      imgSlideSrc: []
    },
    {
      id: 5,
      name: "Service Name 5",
      type: "service",
      timeStamp: "18-06-2022",
      imgSrc: "http://placehold.jp/500x375.png",
      detail: "Detail This suggests others may use this approach to design a variety of living machines to safely deliver drugs inside the human body",
      imgSlideSrc: []
    },
    {
      id: 6,
      name: "Service Name 6",
      type: "service",
      timeStamp: "18-06-2022",
      imgSrc: "http://placehold.jp/500x375.png",
      detail: "Detail This suggests others may use this approach to design a variety of living machines to safely deliver drugs inside the human body",
      imgSlideSrc: []
    },
    {
      id: 7,
      name: "Activity Name 1",
      type: "activity",
      timeStamp: "18-06-2022",
      imgSrc: "http://placehold.jp/500x375.png",
      detail: "Detail This suggests others may use this approach to design a variety of living machines to safely deliver drugs inside the human body",
      imgSlideSrc: [
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 1"
        },
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 2"
        },
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 3"
        },
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 4"
        },
      ]
    },
    {
      id: 8,
      name: "Activity Name 2",
      type: "activity",
      timeStamp: "18-06-2022",
      imgSrc: "http://placehold.jp/500x375.png",
      detail: "Detail This suggests others may use this approach to design a variety of living machines to safely deliver drugs inside the human body",
      imgSlideSrc: [
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 1"
        },
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 2"
        },
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 3"
        },
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 4"
        },
      ]
    },
    {
      id: 9,
      name: "Activity Name 3",
      type: "activity",
      timeStamp: "18-06-2022",
      imgSrc: "http://placehold.jp/500x375.png",
      detail: "Detail This suggests others may use this approach to design a variety of living machines to safely deliver drugs inside the human body",
      imgSlideSrc: [
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 1"
        },
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 2"
        },
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 3"
        },
        {
        imgSlideSrcUrl: "http://placehold.jp/700x467.png",
        imgSlideSrcName: "Picture Name 4"
        },
      ]
    },
    {
      id: 10,
      name: "Activity Name 4",
      type: "activity",
      timeStamp: "18-06-2022",
      imgSrc: "http://placehold.jp/500x375.png",
      detail: "Detail This suggests others may use this approach to design a variety of living machines to safely deliver drugs inside the human body",
      imgSlideSrc: []
    },
  ]


const partnerData = [
    {
      id: 1,
      name: "UNDP",
      detail: "Detail This suggests others may use...",
      imgSrc: "http://placehold.jp/250x250.png",
    },
    {
      id: 2,
      name: "UNDP",
      detail: "Detail This suggests others may use...",
      imgSrc: "http://placehold.jp/250x250.png",
    },
    {
      id: 3,
      name: "UNDP",
      detail: "Detail This suggests others may use...",
      imgSrc: "http://placehold.jp/250x250.png",
    },
    {
      id: 4,
      name: "UNDP",
      detail: "Detail This suggests others may use...",
      imgSrc: "http://placehold.jp/250x250.png",
    },
    {
      id: 5,
      name: "UNDP",
      detail: "Detail This suggests others may use...",
      imgSrc: "http://placehold.jp/250x250.png",
    },
  ]


const reviewData = [
    {
      id: 1,
      name: "Chansamone VONGKHAMSAO",
      imgSrc: "http://placehold.jp/150x150.png",
      review: "Review This suggests others may use this approach to design a variety of living machines to safely deliver drugs inside the human body, help with environmental remediation, or further broaden our understanding of the diverse forms and functions life may adopt.",
      timeStamp: "17-06-2022"
    },
    {
      id: 2,
      name: "Xaypanya PHONGSA",
      imgSrc: "http://placehold.jp/150x150.png",
      review: "Review This suggests others may use this approach to design a variety of living machines to safely deliver drugs inside the human body, help with environmental remediation, or further broaden our understanding of the diverse forms and functions life may adopt.",
      timeStamp: "17-06-2022"
    },
    {
      id: 3,
      name: "Saiyvoud SOMNANONG",
      imgSrc: "http://placehold.jp/150x150.png",
      review: "Review This suggests others may use this approach to design a variety of living machines to safely deliver drugs inside the human body, help with environmental remediation, or further broaden our understanding of the diverse forms and functions life may adopt.",
      timeStamp: "17-06-2022"
    },
  ]