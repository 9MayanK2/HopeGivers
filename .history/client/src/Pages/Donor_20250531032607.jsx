import React, { useState, useEffect } from 'react';
import '../style/Donor.css'; // Make sure your CSS is imported
import axios from 'axios';
const apis from '../utils/apis';

const locationData = {
  India: {
    "Andhra Pradesh": {
      "Anantapur": ["Anantapur", "Guntakal", "Hindupur"],
      "Chittoor": ["Tirupati", "Madanapalle", "Punganur"],
      "East Godavari": ["Rajahmundry", "Kakinada", "Amalapuram"],
      "Guntur": ["Guntur", "Narasaraopet", "Tenali"],
      "Krishna": ["Vijayawada", "Machilipatnam"],
      "Kurnool": ["Kurnool", "Nandyal"],
      "Nellore": ["Nellore", "Gudur"],
      "Prakasam": ["Ongole", "Markapur"],
      "Srikakulam": ["Srikakulam", "Palasa"],
      "Visakhapatnam": ["Visakhapatnam", "Bheemunipatnam"],
      "Vizianagaram": ["Vizianagaram", "Bobba"],
      "West Godavari": ["Eluru", "Tadepalligudem"]
    },
    ArunachalPradesh: {
      "Tawang": ["Tawang"],
      "West Kameng": ["Bomdila"],
      "East Kameng": ["Seppa"],
      "Papum Pare": ["Itanagar"],
      "Kurung Kumey": ["Koloriang"],
      "Lower Subansiri": ["Ziro"],
      "Upper Subansiri": ["Daporijo"],
      "West Siang": ["Aalo"],
      "East Siang": ["Pasighat"],
      "Siang": ["Boleng"],
      "Lower Siang": ["Likabali"],
      "Upper Siang": ["Yingkiong"],
      "Lower Dibang Valley": ["Roing"],
      "Dibang Valley": ["Anini"],
      "Longding": ["Longding"]
    },
    Assam: {
      "Baksa": ["Mankachar"],
      "Barpeta": ["Barpeta"],
      "Bongaigaon": ["Bongaigaon"],
      "Cachar": ["Silchar"],
      "Darrang": ["Mangaldoi"],
      "Dhemaji": ["Dhemaji"],
      "Dhubri": ["Dhubri"],
      "Dibrugarh": ["Dibrugarh"],
      "Goalpara": ["Goalpara"],
      "Golaghat": ["Golaghat"],
      "Hailakandi": ["Hailakandi"],
      "Jorhat": ["Jorhat"],
      "Kamrup Metropolitan": ["Guwahati"],
      "Kamrup": ["Amingaon"],
      "Karbi Anglong": ["Diphu"],
      "Karimganj": ["Karimganj"],
      "Lakhimpur": ["North Lakhimpur"],
      "Marigaon": ["Marigaon"],
      "Nagaon": ["Nagaon"],
      "Sivasagar": ["Sivasagar"],
      "Sonitpur": ["Tezpur"],
      "Tinsukia": ["Tinsukia"]
    },
    Bihar: {
      "Araria": ["Araria"],
      "Arwal": ["Arwal"],
      "Aurangabad": ["Aurangabad"],
      "Banka": ["Banka"],
      "Begusarai": ["Begusarai"],
      "Bhagalpur": ["Bhagalpur"],
      "Bhojpur": ["Arrah"],
      "Buxar": ["Buxar"],
      "Darbhanga": ["Darbhanga"],
      "East Champaran": ["Motihari"],
      "Gaya": ["Gaya"],
      "Gopalganj": ["Gopalganj"],
      "Jamui": ["Jamui"],
      "Jehanabad": ["Jehanabad"],
      "Kaimur": ["Bhabua"],
      "Katihar": ["Katihar"],
      "Khagaria": ["Khagaria"],
      "Kishanganj": ["Kishanganj"],
      "Lakhisarai": ["Lakhisarai"],
      "Madhepura": ["Madhepura"],
      "Madhubani": ["Madhubani"],
      "Munger": ["Munger"],
      "Muzaffarpur": ["Muzaffarpur"],
      "Nalanda": ["Bihar Sharif"],
      "Nawada": ["Nawada"],
      "Patna": ["Patna"],
      "Purnia": ["Purnia"],
      "Rohtas": ["Sasaram"],
      "Saharsa": ["Saharsa"],
      "Samastipur": ["Samastipur"],
      "Saran": ["Chapra"],
      "Sheikhpura": ["Sheikhpura"],
      "Sheohar": ["Sheohar"],
      "Sitamarhi": ["Sitamarhi"],
      "Siwan": ["Siwan"],
      "Supaul": ["Supaul"],
      "Vaishali": ["Hajipur"],
      "West Champaran": ["Bettiah"]
    },
    Chhattisgarh: {
      "Balod": ["Balod"],
      "Baloda Bazar": ["Baloda Bazar"],
      "Balrampur": ["Balrampur"],
      "Bastar": ["Jagdalpur"],
      "Bemetara": ["Bemetara"],
      "Bijapur": ["Bijapur"],
      "Bilaspur": ["Bilaspur"],
      "Dantewada": ["Dantewada"],
      "Dhamtari": ["Dhamtari"],
      "Durg": ["Durg"],
      "Gariaband": ["Gariaband"],
      "Janjgir-Champa": ["Janjgir"],
      "Jashpur": ["Jashpur Nagar"],
      "Kabirdham": ["Kawardha"],
      "Kanker": ["Kanker"],
      "Kondagaon": ["Kondagaon"],
      "Korba": ["Korba"],
      "Koriya": ["Baikunthpur"],
      "Mahasamund": ["Mahasamund"],
      "Mungeli": ["Mungeli"],
      "Narayanpur": ["Narayanpur"],
      "Raigarh": ["Raigarh"],
      "Raipur": ["Raipur"],
      "Rajnandgaon": ["Rajnandgaon"],
      "Sukma": ["Sukma"],
      "Surajpur": ["Surajpur"],
      "Surguja": ["Ambikapur"]
    },
    Goa: {
      "North Goa": ["Panaji", "Mapusa", "Calangute"],
      "South Goa": ["Margao", "Vasco da Gama", "Canacona"]
    },
    Gujarat: {
      "Ahmedabad": ["Ahmedabad", "Gandhinagar"],
      "Amreli": ["Amreli"],
      "Anand": ["Anand"],
      "Aravalli": ["Modasa"],
      "Banaskantha": ["Palanpur"],
      "Bharuch": ["Bharuch"],
      "Bhavnagar": ["Bhavnagar"],
      "Botad": ["Botad"],
      "Chhota Udaipur": ["Chhota Udaipur"],
      "Dahod": ["Dahod"],
      "Dang": ["Ahwa"],
      "Devbhoomi Dwarka": ["Dwarka"],
      "Gandhinagar": ["Gandhinagar"],
      "Gir Somnath": ["Una"],
      "Jamnagar": ["Jamnagar"],
      "Junagadh": ["Junagadh"],
      "Kheda": ["Kheda"],
      "Mahisagar": ["Lunawada"],
      "Mehsana": ["Mehsana"],
      "Morbi": ["Morbi"],
      "Narmada": ["Rajpipla"],
      "Navsari": ["Navsari"],
      "Panchmahal": ["Godhra"],
      "Patan": ["Patan"],
      "Porbandar": ["Porbandar"],
      "Rajkot": ["Rajkot"],
      "Sabarkantha": ["Himmatnagar"],
      "Surat": ["Surat"],
      "Surendranagar": ["Surendranagar"],
      "Tapi": ["Vyara"],
      "Vadodara": ["Vadodara"],
      "Valsad": ["Valsad"]
    },
    Haryana: {
      "Ambala": ["Ambala"],
      "Bhiwani": ["Bhiwani"],
      "Charkhi Dadri": ["Charkhi Dadri"],
      "Faridabad": ["Faridabad"],
      "Fatehabad": ["Fatehabad"],
      "Gurugram": ["Gurugram"],
      "Hisar": ["Hisar"],
      "Jhajjar": ["Jhajjar"],
      "Jind": ["Jind"],
      "Kaithal": ["Kaithal"],
      "Karnal": ["Karnal"],
      "Kurukshetra": ["Kurukshetra"],
      "Mahendragarh": ["Narnaul"],
      "Nuh": ["Nuh"],
      "Palwal": ["Palwal"],
      "Panchkula": ["Panchkula"],
      "Panipat": ["Panipat"],
      "Rewari": ["Rewari"],
      "Rohtak": ["Rohtak"],
      "Sirsa": ["Sirsa"],
      "Sonipat": ["Sonipat"],
      "Yamunanagar": ["Yamunanagar"]
    },
    HimachalPradesh: {
      "Bilaspur": ["Bilaspur"],
      "Chamba": ["Chamba"],
      "Hamirpur": ["Hamirpur"],
      "Kangra": ["Dharamshala"],
      "Kinnaur": ["Sangla"],
      "Kullu": ["Kullu"],
      "Lahaul and Spiti": ["Keylong"],
      "Mandi": ["Mandi"],
      "Shimla": ["Shimla"],
      "Sirmaur": ["Nahan"],
      "Solan": ["Solan"],
      "Una": ["Una"]
    },
    Jharkhand: {
      "Bokaro": ["Bokaro Steel City"],
      "Chatra": ["Chatra"],
      "Deoghar": ["Deoghar"],
      "Dhanbad": ["Dhanbad"],
      "Dumka": ["Dumka"],
      "Garhwa": ["Garhwa"],
      "Giridih": ["Giridih"],
      "Godda": ["Godda"],
      "Gumla": ["Gumla"],
      "Hazaribagh": ["Hazaribagh"],
      "Jamtara": ["Jamtara"],
      "Khunti": ["Khunti"],
      "Koderma": ["Koderma"],
      "Latehar": ["Latehar"],
      "Lohardaga": ["Lohardaga"],
      "Pakur": ["Pakur"],
      "Palamu": ["Daltonganj"],
      "Ramgarh": ["Ramgarh"],
      "Ranchi": ["Ranchi"],
      "Sahibganj": ["Sahibganj"],
      "Saraikela Kharsawan": ["Saraikela"],
      "Simdega": ["Simdega"]
    },
    Karnataka: {
      "Bagalkot": ["Bagalkot"],
      "Ballari": ["Ballari"],
      "Belagavi": ["Belagavi"],
      "Bengaluru Urban": ["Bengaluru"],
      "Bengaluru Rural": ["Devanahalli"],
      "Bidar": ["Bidar"],
      "Chamarajanagar": ["Chamarajanagar"],
      "Chikballapur": ["Chikballapur"],
      "Chikkamagaluru": ["Chikkamagaluru"],
      "Dakshina Kannada": ["Mangalore"],
      "Davanagere": ["Davanagere"],
      "Dharwad": ["Dharwad"],
      "Gadag": ["Gadag"],
      "Hassan": ["Hassan"],
      "Haveri": ["Haveri"],
      "Kalaburagi": ["Kalaburagi"],
      "Kodagu": ["Madikeri"],
      "Kolar": ["Kolar"],
      "Koppal": ["Koppal"],
      "Mandya": ["Mandya"],
      "Mysuru": ["Mysuru"],
      "Raichur": ["Raichur"],
      "Ramanagara": ["Ramanagara"],
      "Shivamogga": ["Shivamogga"],
      "Tumakuru": ["Tumakuru"],
      "Udupi": ["Udupi"],
      "Uttara Kannada": ["Karwar"],
      "Vijayanagara": ["Hosapete"],
      "Yadgir": ["Yadgir"]
    },
    Kerala: {
      "Alappuzha": ["Alappuzha"],
      "Ernakulam": ["Kochi"],
      "Idukki": ["Devikulam"],
      "Kannur": ["Kannur"],
      "Kasaragod": ["Kasaragod"],
      "Kollam": ["Kollam"],
      "Kottayam": ["Kottayam"],
      "Kozhikode": ["Kozhikode"],
      "Malappuram": ["Malappuram"],
      "Palakkad": ["Palakkad"],
      "Pathanamthitta": ["Pathanamthitta"],
      "Thiruvananthapuram": ["Thiruvananthapuram"],
      "Thrissur": ["Thrissur"],
      "Wayanad": ["Wayanad"]
    },
    MadhyaPradesh: {
      "Agar Malwa": ["Agar Malwa"],
      "Alirajpur": ["Alirajpur"],
      "Anuppur": ["Anuppur"],
      "Ashok Nagar": ["Ashok Nagar"],
      "Balaghat": ["Balaghat"],
      "Barwani": ["Barwani"],
      "Betul": ["Betul"],
      "Bhind": ["Bhind"],
      "Bhopal": ["Bhopal"],
      "Burhanpur": ["Burhanpur"],
      "Chhatarpur": ["Chhatarpur"],
      "Chhindwara": ["Chhindwara"],
      "Damoh": ["Damoh"],
      "Datia": ["Datia"],
      "Dewas": ["Dewas"],
      "Dhar": ["Dhar"],
      "Dindori": ["Dindori"],
      "Guna": ["Guna"],
      "Gwalior": ["Gwalior"],
      "Harda": ["Harda"],
      "Hoshangabad": ["Hoshangabad"],
      "Indore": ["Indore"],
      "Jabalpur": ["Jabalpur"],
      "Jhabua": ["Jhabua"],
      "Katni": ["Katni"],
      "Khandwa": ["Khandwa"],
      "Khargone": ["Khargone"],
      "Mandla": ["Mandla"],
      "Mandsaur": ["Mandsaur"],
      "Morena": ["Morena"],
      "Narsinghpur": ["Narsinghpur"],
      "Neemuch": ["Neemuch"],
      "Panna": ["Panna"],
      "Raisen": ["Raisen"],
      "Rajgarh": ["Rajgarh"],
      "Ratlam": ["Ratlam"],
      "Rewa": ["Rewa"],
      "Sagar": ["Sagar"],
      "Satna": ["Satna"],
      "Sehore": ["Sehore"],
      "Seoni": ["Seoni"],
      "Shahdol": ["Shahdol"],
      "Shajapur": ["Shajapur"],
      "Sheopur": ["Sheopur"],
      " Shivpuri": ["Shivpuri"],
      "Sidhi": ["Sidhi"],
      "Singrauli": ["Singrauli"],
      "Tikamgarh": ["Tikamgarh"],
      "Ujjain": ["Ujjain"],
      "Umaria": ["Umaria"],
      "Vidisha": ["Vidisha"]
    },
    Maharashtra: {
      "Ahmednagar": ["Ahmednagar"],
      "Akola": ["Akola"],
      "Amravati": ["Amravati"],
      "Aurangabad": ["Aurangabad"],
      "Beed": ["Beed"],
      "Bhandara": ["Bhandara"],
      "Buldhana": ["Buldhana"],
      "Chandrapur": ["Chandrapur"],
      "Dhule": ["Dhule"],
      "Gadchiroli": ["Gadchiroli"],
      "Gondia": ["Gondia"],
      "Hingoli": ["Hingoli"],
      "Jalgaon": ["Jalgaon"],
      "Jalna": ["Jalna"],
      "Kolhapur": ["Kolhapur"],
      "Latur": ["Latur"],
      "Mumbai City": ["Mumbai"],
      "Mumbai Suburban": ["Bandra", "Andheri", "Dadar"],
      "Nagpur": ["Nagpur"],
      "Nanded": ["Nanded"],
      "Nandurbar": ["Nandurbar"],
      "Nashik": ["Nashik"],
      "Osmanabad": ["Osmanabad"],
      "Palghar": ["Palghar"],
      "Parbhani": ["Parbhani"],
      "Pune": ["Pune", "Shivajinagar", "Kothrud"],
      "Raigad": ["Alibag"],
      "Ratnagiri": ["Ratnagiri"],
      "Sangli": ["Sangli"],
      "Satara": ["Satara"],
      "Sindhudurg": ["Sindhudurg"],
      "Solapur": ["Solapur"],
      "Thane": ["Thane"],
      "Wardha": ["Wardha"],
      "Washim": ["Washim"],
      "Yavatmal": ["Yavatmal"]
    },
    Manipur: {
      "Bishnupur": ["Bishnupur"],
      "Churachandpur": ["Churachandpur"],
      "Imphal East": ["Porompat"],
      "Imphal West": ["Lamphel"],
      "Senapati": ["Senapati"],
      "Tamenglong": ["Tamenglong"],
      "Thoubal": ["Thoubal"],
      "Ukhrul": ["Ukhrul"]
    },
    Meghalaya: {
      "East Garo Hills": ["Williamnagar"],
      "East Jaintia Hills": ["Khliehriat"],
      "East Khasi Hills": ["Shillong"],
      "North Garo Hills": ["Resubelpara"],
      "Ri Bhoi": ["Nongpoh"],
      "South Garo Hills": ["Baghmara"],
      "South West Garo Hills": ["Ampati"],
      "South West Khasi Hills": ["Mawkyrwat"],
      "West Garo Hills": ["Tura"],
      "West Jaintia Hills": ["Jowai"],
      "West Khasi Hills": ["Nongstoin"]
    },
    Mizoram: {
      "Aizawl": ["Aizawl"],
      "Champhai": ["Champhai"],
      "Kolasib": ["Kolasib"],
      "Lawngtlai": ["Lawngtlai"],
      "Lunglei": ["Lunglei"],
      "Mamit": ["Mamit"],
      "Saiha": ["Saiha"],
      "Serchhip": ["Serchhip"]
    },
    Nagaland: {
      "Dimapur": ["Dimapur"],
      "Kiphire": ["Kiphire"],
      "Kohima": ["Kohima"],
      "Longleng": ["Longleng"],
      "Mokokchung": ["Mokokchung"],
      "Mon": ["Mon"],
      "Peren": ["Peren"],
      "Phek": ["Phek"],
      "Tuensang": ["Tuensang"],
      "Wokha": ["Wokha"],
      "Zunheboto": ["Zunheboto"]
    },
    Odisha: {
      "Angul": ["Angul"],
      "Balangir": ["Balangir"],
      "Balasore": ["Balasore"],
      "Bargarh": ["Bargarh"],
      "Bhadrak": ["Bhadrak"],
      "Cuttack": ["Cuttack"],
      "Deogarh": ["Deogarh"],
      "Dhenkanal": ["Dhenkanal"],
      "Gajapati": ["Paralakhemundi"],
      "Ganjam": ["Berhampur"],
      "Jagatsinghpur": ["Jagatsinghpur"],
      "Jajpur": ["Jajpur"],
      "Jharsuguda": ["Jharsuguda"],
      "Kalahandi": ["Bhawanipatna"],
      "Kandhamal": ["Phulbani"],
      "Kendrapara": ["Kendrapara"],
      "Kendujhar": ["Kendujhar"],
      "Khordha": ["Bhubaneswar"],
      "Koraput": ["Koraput"],
      "Malkangiri": ["Malkangiri"],
      "Mayurbhanj": ["Baripada"],
      "Nabarangpur": ["Nabarangpur"],
      "Nayagarh": ["Nayagarh"],
      "Nuapada": ["Nuapada"],
      "Puri": ["Puri"],
      "Rayagada": ["Rayagada"],
      "Sambalpur": ["Sambalpur"],
      "Sundergarh": ["Sundergarh"]
    },
    Punjab: {
      "Amritsar": ["Amritsar"],
      "Barnala": ["Barnala"],
      "Bathinda": ["Bathinda"],
      "Faridkot": ["Faridkot"],
      "Fatehgarh Sahib": ["Fatehgarh Sahib"],
      "Fazilka": ["Fazilka"],
      "Firozpur": ["Firozpur"],
      "Gurdaspur": ["Gurdaspur"],
      "Hoshiarpur": ["Hoshiarpur"],
      "Jalandhar": ["Jalandhar"],
      "Kapurthala": ["Kapurthala"],
      "Ludhiana": ["Ludhiana"],
      "Malerkotla": ["Malerkotla"],
      "Mansa": ["Mansa"],
      "Moga": ["Moga"],
      "Muktsar": ["Muktsar"],
      "Pathankot": ["Pathankot"],
      "Patiala": ["Patiala"],
      "Rupnagar": ["Rupnagar"],
      "Sahibzada Ajit Singh Nagar": ["Mohali"],
      "Sangrur": ["Sangrur"],
      "Shaheed Bhagat Singh Nagar": ["Nawanshahr"],
      "Tarn Taran": ["Tarn Taran"]
    },
    Rajasthan: {
      "Ajmer": ["Ajmer"],
      "Alwar": ["Alwar"],
      "Banswara": ["Banswara"],
      "Baran": ["Baran"],
      "Barmer": ["Barmer"],
      "Bharatpur": ["Bharatpur"],
      "Bhilwara": ["Bhilwara"],
      "Bikaner": ["Bikaner"],
      "Bundi": ["Bundi"],
      "Chittorgarh": ["Chittorgarh"],
      "Churu": ["Churu"],
      "Dausa": ["Dausa"],
      "Dholpur": ["Dholpur"],
      "Dungarpur": ["Dungarpur"],
      "Hanumangarh": ["Hanumangarh"],
      "Jaipur": ["Jaipur"],
      "Jaisalmer": ["Jaisalmer"],
      "Jalore": ["Jalore"],
      "Jhalawar": ["Jhalawar"],
      "Jhunjhunu": ["Jhunjhunu"],
      "Jodhpur": ["Jodhpur"],
      "Karauli": ["Karauli"],
      "Kota": ["Kota"],
      "Nagaur": ["Nagaur"],
      "Pali": ["Pali"],
      "Pratapgarh": ["Pratapgarh"],
      "Rajsamand": ["Rajsamand"],
      "Sawai Madhopur": ["Sawai Madhopur"],
      "Sikar": ["Sikar"],
      "Sirohi": ["Sirohi"],
      "Sri Ganganagar": ["Sri Ganganagar"],
      "Tonk": ["Tonk"],
      "Udaipur": ["Udaipur"]
    },
    Sikkim: {
      "East Sikkim": ["Gangtok"],
      "North Sikkim": ["Mangan"],
      "South Sikkim": ["Namchi"],
      "West Sikkim": ["Gyalshing"]
    },
    TamilNadu: {
      "Ariyalur": ["Ariyalur"],
      "Chengalpattu": ["Chengalpattu"],
      "Chennai": ["Chennai"],
      "Coimbatore": ["Coimbatore"],
      "Cuddalore": ["Cuddalore"],
      "Dharmapuri": ["Dharmapuri"],
      "Dindigul": ["Dindigul"],
      "Erode": ["Erode"],
      "Kanchipuram": ["Kanchipuram"],
      "Kanyakumari": ["Nagercoil"],
      "Karur": ["Karur"],
      "Krishnagiri": ["Krishnagiri"],
      "Madurai": ["Madurai"],
      "Nagapattinam": ["Nagapattinam"],
      "Namakkal": ["Namakkal"],
      "Nilgiris": ["Udhagamandalam"],
      "Perambalur": ["Perambalur"],
      "Pudukkottai": ["Pudukkottai"],
      "Ramanathapuram": ["Ramanathapuram"],
      "Salem": ["Salem"],
      "Sivaganga": ["Sivaganga"],
      "Tenkasi": ["Tenkasi"],
      "Thanjavur": ["Thanjavur"],
      "The Nilgiris": ["Ooty"],
      "Theni": ["Theni"],
      "Thiruvallur": ["Thiruvallur"],
      "Thiruvarur": ["Thiruvarur"],
      "Thoothukudi": ["Thoothukudi"],
      "Tiruchirappalli": ["Tiruchirappalli"],
      "Tirunelveli": ["Tirunelveli"],
      "Tiruppur": ["Tiruppur"],
      "Tiruvannamalai": ["Tiruvannamalai"],
      "Vellore": ["Vellore"],
      "Viluppuram": ["Viluppuram"],
      "Virudhunagar": ["Virudhunagar"]
    },
    Telangana: {
      "Adilabad": ["Adilabad"],
      "Bhadradri Kothagudem": ["Kothagudem"],
      "Hyderabad": ["Hyderabad"],
      "Jagitial": ["Jagitial"],
      "Jangaon": ["Jangaon"],
      "Jayashankar Bhupalpally": ["Bhupalpally"],
      "Jogulamba Gadwal": ["Gadwal"],
      "Kamareddy": ["Kamareddy"],
      "Karimnagar": ["Karimnagar"],
      "Khammam": ["Khammam"],
      "Komaram Bheem": ["Asifabad"],
      "Mahabubabad": ["Mahabubabad"],
      "Mahbubnagar": ["Mahbubnagar"],
      "Mancherial": ["Mancherial"],
      "Medak": ["Medak"],
      "Medchal Malkajgiri": ["Medchal"],
      "Mulugu": ["Mulugu"],
      "Nagarkurnool": ["Nagarkurnool"],
      "Nalgonda": ["Nalgonda"],
      "Narayanpet": ["Narayanpet"],
      "Nirmal": ["Nirmal"],
      "Nizamabad": ["Nizamabad"],
      "Peddapalli": ["Peddapalli"],
      "Rajanna Sircilla": ["Sircilla"],
      "Rangareddy": ["Rangareddy"],
      "Sangareddy": ["Sangareddy"],
      "Siddipet": ["Siddipet"],
      "Suryapet": ["Suryapet"],
      "Vikarabad": ["Vikarabad"],
      "Wanaparthy": ["Wanaparthy"],
      "Warangal Rural": ["Warangal"],
      "Warangal Urban": ["Warangal"],
      "Yadadri Bhuvanagiri": ["Bhuvanagiri"]
    },
    Tripura: {
      "Dhalai": ["Dhalai"],
      "Gomati": ["Gomati"],
      "Khowai": ["Khowai"],
      "North Tripura": ["Dharmanagar"],
      "Sepahijala": ["Sonamura"],
      "South Tripura": ["Udaipur"],
      "Unakoti": ["Kailashahar"],
      "West Tripura": ["Agartala"]
    },
    UttarPradesh: {
      "Agra": ["Agra"],
      "Aligarh": ["Aligarh"],
      "Ambedkar Nagar": ["Akbarpur"],
      "Amethi": ["Amethi"],
      "Amroha": ["Amroha"],
      "Auraiya": ["Auraiya"],
      "Azamgarh": ["Azamgarh"],
      "Baghpat": ["Baghpat"],
      "Bahraich": ["Bahraich"],
      "Ballia": ["Ballia"],
      "Balrampur": ["Balrampur"],
      "Banda": ["Banda"],
      "Barabanki": ["Barabanki"],
      "Bareilly": ["Bareilly"],
      "Basti": ["Basti"],
      "Bhadohi": ["Bhadohi"],
      "Bijnor": ["Bijnor"],
      "Bulandshahr": ["Bulandshahr"],
      "Chandauli": ["Chandauli"],
      "Chitrakoot": ["Chitrakoot"],
      "Deoria": ["Deoria"],
      "Etah": ["Etah"],
      "Etawah": ["Etawah"],
      "Farrukhabad": ["Farrukhabad"],
      "Fatehpur": ["Fatehpur"],
      "Firozabad": ["Firozabad"],
      "Gautam Buddha Nagar": ["Noida"],
      "Ghaziabad": ["Ghaziabad"],
      "Ghazipur": ["Ghazipur"],
      "Gonda": ["Gonda"],
      "Gorakhpur": ["Gorakhpur"],
      "Hamirpur": ["Hamirpur"],
      "Hapur": ["Hapur"],
      "Hardoi": ["Hardoi"],
      "Hathras": ["Hathras"],
      "Jalaun": ["Jalaun"],
      "Jaunpur": ["Jaunpur"],
      "Jhansi": ["Jhansi"],
      "Kannauj": ["Kannauj"],
      "Kanpur Dehat": ["Kanpur Dehat"],
      "Kanpur Nagar": ["Kanpur"],
      "Kasganj": ["Kasganj"],
      "Kaushambi": ["Kaushambi"],
      "Kushinagar": ["Kushinagar"],
      "Lakhimpur Kheri": ["Lakhimpur"],
      "Lalitpur": ["Lalitpur"],
      "Lucknow": ["Lucknow"],
      "Maharajganj": ["Maharajganj"],
      "Mahoba": ["Mahoba"],
      "Mainpuri": ["Mainpuri"],
      "Mathura": ["Mathura"],
      "Mau": ["Mau"],
      "Meerut": ["Meerut"],
      "Mirzapur": ["Mirzapur"],
      "Moradabad": ["Moradabad"],
      "Muzaffarnagar": ["Muzaffarnagar"],
      "Pilibhit": ["Pilibhit"],
      "Pratapgarh": ["Pratapgarh"],
      "Raebareli": ["Raebareli"],
      "Rampur": ["Rampur"],
      "Saharanpur": ["Saharanpur"],
      "Sambhal": ["Sambhal"],
      "Sant Kabir Nagar": ["Sant Kabir Nagar"],
      "Shahjahanpur": ["Shahjahanpur"],
      "Shamli": ["Shamli"],
      "Shravasti": ["Shravasti"],
      "Siddharthnagar": ["Siddharthnagar"],
      "Sitapur": ["Sitapur"],
      "Sonbhadra": ["Sonbhadra"],
      "Sultanpur": ["Sultanpur"],
      "Unnao": ["Unnao"],
      "Varanasi": ["Varanasi"]
    },
    Uttarakhand: {
      "Almora": ["Almora"],
      "Bageshwar": ["Bageshwar"],
      "Chamoli": ["Chamoli"],
      "Champawat": ["Champawat"],
      "Dehradun": ["Dehradun"],
      "Haridwar": ["Haridwar"],
      "Nainital": ["Nainital"],
      "Pauri Garhwal": ["Pauri"],
      "Pithoragarh": ["Pithoragarh"],
      "Rudraprayag": ["Rudraprayag"],
      "Tehri Garhwal": ["Tehri"],
      "Udham Singh Nagar": ["Rudrapur"],
      "Uttarkashi": ["Uttarkashi"]
    },
    WestBengal: {
      "Alipurduar": ["Alipurduar"],
      "Bankura": ["Bankura"],
      "Birbhum": ["Suri"],
      "Cooch Behar": ["Cooch Behar"],
      "Dakshin Dinajpur": ["Balurghat"],
      "Darjeeling": ["Darjeeling"],
      "Hooghly": ["Chinsurah"],
      "Howrah": ["Howrah"],
      "Jalpaiguri": ["Jalpaiguri"],
      "Jhargram": ["Jhargram"],
      "Kalimpong": ["Kalimpong"],
      "Kolkata": ["Kolkata"],
      "Malda": ["Malda"],
      "Murshidabad": ["Murshidabad"],
      "Nadia": ["Krishnanagar"],
      "North 24 Parganas": ["Barasat"],
      "Paschim Bardhaman": ["Asansol"],
      "Paschim Medinipur": ["Midnapore"],
      "Purba Bardhaman": ["Bardhaman"],
      "Purba Medinipur": ["Tamluk"],
      "Purulia": ["Purulia"],
      "South 24 Parganas": ["Alipore"],
      "Uttar Dinajpur": ["Raiganj"]
    }
  },
  USA: {
    California: {
      "Los Angeles County": ["Los Angeles", "Glendale", "Pasadena"],
      "San Diego County": ["San Diego", "Chula Vista", "La Jolla"]
    },
    Texas: {
      Dallas: ["Plano", "Irving", "Richardson"],
      Austin: ["Downtown", "Hyde Park", "Round Rock"]
    }
  },
  Canada: {
    Ontario: {
      Toronto: ["Downtown", "Scarborough", "Etobicoke"],
      Ottawa: ["Kanata", "Orleans", "Nepean"]
    },
    Quebec: {
      Montreal: ["Old Montreal", "Plateau", "Laval"],
      QuebecCity: ["Sainte-Foy", "Beauport", "Charlesbourg"]
    }
  },
  Australia: {
    "New South Wales": {
      Sydney: ["Parramatta", "Bondi", "Newtown"],
      Newcastle: ["Merewether", "Hamilton"]
    },
    Victoria: {
      Melbourne: ["Carlton", "Richmond", "Footscray"],
      Geelong: ["Norlane", "Belmont"]
    }
  }
};

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    bloodGroup: '',
    mobileNumber: '',
    country: '',
    state: '',
    district: '',
    city: '',
    email: '',
    userId: '',
    password: '',
    retypePassword: '',
    isAvailable: false,
    authorize: false,
  });

  const [captchaCode, setCaptchaCode] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCaptchaCode(code);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.retypePassword) {
      alert("Passwords do not match!");
      return;
    }

    if (captchaInput.toUpperCase() !== captchaCode) {
      setCaptchaError(true);
      generateCaptcha();
      return;
    }

    setCaptchaError(false);
    try {
      const response = await fetch(apis().registerUser, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message || "Form submitted successfully!");
        console.log(result);
      } else {
        // If the response is not OK, you can show the error message from the server.
        alert(result.message || "There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("There was an error submitting the form.");
    }
  };



  const getStates = () => {
    return formData.country ? Object.keys(locationData[formData.country] || {}) : [];
  };

  const getDistricts = () => {
    return formData.state ? Object.keys(locationData[formData.country]?.[formData.state] || {}) : [];
  };

  const getCities = () => {
    return formData.district ? locationData[formData.country]?.[formData.state]?.[formData.district] || [] : [];
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">REGISTRATION FORM</h2>

      <label className="form-label">Full Name:</label>
      <input name="fullName" value={formData.fullName} onChange={handleChange} required className="form-input" />

      <label className="form-label">Blood Group:</label>
      <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required className="form-select">
        <option value="">-----Select-----</option>
        {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
      </select>

      <label className="form-label">Mobile Number:</label>
      <input
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleChange}
        required
        placeholder="Don't add 0 except Malaysia"
        className="form-input"
      />

      <label className="form-label">Select Country:</label>
      <select name="country" value={formData.country} onChange={handleChange} required className="form-select">
        <option value="">-----Select-----</option>
        {Object.keys(locationData).map(country => <option key={country} value={country}>{country}</option>)}
      </select>

      <label className="form-label">Select State:</label>
      <select name="state" value={formData.state} onChange={handleChange} required className="form-select">
        <option value="">-----Select-----</option>
        {getStates().map(state => <option key={state} value={state}>{state}</option>)}
      </select>

      <label className="form-label">Select District:</label>
      <select name="district" value={formData.district} onChange={handleChange} required className="form-select">
        <option value="">-----Select-----</option>
        {getDistricts().map(district => <option key={district} value={district}>{district}</option>)}
      </select>

      <label className="form-label">Select City:</label>
      <select name="city" value={formData.city} onChange={handleChange} required className="form-select">
        <option value="">-----Select-----</option>
        {getCities().map(city => <option key={city} value={city}>{city}</option>)}
      </select>

      <label className="form-label">Email ID:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" />

      <label className="form-label">User ID:</label>
      <input name="userId" value={formData.userId} onChange={handleChange} required className="form-input" />

      <label className="form-label">Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required className="form-input" />

      <label className="form-label">Re-type Password:</label>
      <input type="password" name="retypePassword" value={formData.retypePassword} onChange={handleChange} required className="form-input" />

      <label className="form-label">Are you available to donate blood?</label>
      <select
        name="isAvailable"
        value={formData.isAvailable ? "Yes" : "No"}
        onChange={(e) => setFormData(prev => ({ ...prev, isAvailable: e.target.value === "Yes" }))}
        className="form-select"
      >
        <option value="No">Not Available</option>
        <option value="Yes">Available</option>
      </select>

      <label className="form-label">Enter Captcha Code:</label>
      <div className="captcha-container">
        <div className="captcha-code">{captchaCode}</div>
        <button type="button" onClick={generateCaptcha} className="refresh-button">↻ Refresh</button>
      </div>

      <input
        type="text"
        name="captchaInput"
        value={captchaInput}
        onChange={(e) => setCaptchaInput(e.target.value)}
        required
        className="form-input"
      />
      {captchaError && <p className="captcha-error">Captcha does not match. Please try again.</p>}

      <label className="checkbox-label">
        <input
          type="checkbox"
          name="authorize"
          checked={formData.authorize}
          onChange={handleChange}
          required
        />
        I authorise this website to display my name and telephone number for emergencies.
      </label>

      <button type="submit" className="submit-button">Submit</button>
    </form>

  );
};

export default RegistrationForm;