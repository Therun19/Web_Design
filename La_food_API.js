// Food Data (JSON)
    const foods = [
        {
            "id": 1,
            "title": "ប្រហុកខ្ទីស",
            "image": "https://images.squarespace-cdn.com/content/v1/5854c249bebafb497fb1865e/1613224791292-SEG956MV65X262I3QWP4/IMG_76361603601447181+2.jpg?format=2500w",
            "dis": "Best Khmer food for you",
            "price": 5.00
        },
        {
            "id": 2,
            "title": "នំបញ្ចុក",
            "image": "https://media.cnn.com/api/v1/images/stellar/prod/191122145834-2-nom-banh-chok-lina-goldberg.jpg?q=w_1110,c_fill",
            "dis": "Best Khmer food for you",
            "price": 2.00
        },
        {
            "id": 3,
            "title": "Ah Mok",
            "image": "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1620068179/Traditional-Cambodian-Dishes-To-Eat-Amok/Traditional-Cambodian-Dishes-To-Eat-Amok.jpg",
            "dis": "Best Khmer food for you",
            "price": 3.50
        },
        {
            "id": 4,
            "title": "ម្ជូរប្រលឹត",
            "image": "https://static.ips-cambodia.com/wp-content/uploads/2023/06/Somlor-mchu-prolit.jpg",
            "dis": "Best Khmer food for you",
            "price": 3.50
        },
        {
            "id": 5,
            "title": "មាន់ដុតទឹកដូង",
            "image": "https://i.pinimg.com/736x/47/41/44/47414448166bc99e09878559ade8ed6d.jpg",
            "dis": "Best Khmer food for you",
            "price": 10.00
        },
        {
            "id": 6,
            "title": "ត្រីអាំង",
            "image": "https://images.deliveryhero.io/image/fd-kh/LH/tj53-listing.jpg",
            "dis": "Best Khmer food for you",
            "price": 2.50
        },
        {
            "id": 7,
            "title": "បញ្ឆែវ",
            "image": "https://stc-vendors.oss-ap-southeast-1.aliyuncs.com/uploads/20250512/51e048a4865d24a6d72ab6a6f3a1dfa9.jpg",
            "dis": "Best Khmer food for you",
            "price": 2.00
        },
        {
            "id": 8,
            "title": "ពងទាចៀន",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsa_LRwLCgETh_dFSt5HvPXnWj-ZS-zh0YzwgE4p5gKinjYa3fkneEf4kYutYD8FAwwZk&usqp=CAU",
            "dis": "Best Khmer food for you",
            "price": 1.00
        }
    ];

    const foodList = document.getElementById("food-list");

    foods.map(food => {
        foodList.innerHTML += `
            <div class="col-md-3 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${food.image}" class="card-img-top" alt="${food.title}">
                    <div class="card-body">
                        <h5 class="card-title">${food.title}</h5>
                        <p class="card-text">${food.dis}</p>
                        <p class="price">$${food.price.toFixed(2)}</p>
                        <button class="btn btn-success w-100">Order Now</button>
                    </div>
                </div>
            </div>
        `;
    });
    