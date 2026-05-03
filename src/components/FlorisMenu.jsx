import { useState, useEffect, useRef, useMemo } from "react";

// ─── Complete Menu Data ───────────────────────────────────────────────────────
const MENU_DATA = {
  "Soup": [
    { name_en: "Cream of Tomato Soup", name_gu: "ક્રીમ ઓફ ટોમેટો સૂપ", price: "₹95", qty: "200 ml" },
    { name_en: "Veg. Sweet Corn Soup", name_gu: "વેજ. સ્વીટ કોર્ન સૂપ", price: "₹95", qty: "200 ml" },
    { name_en: "Cheese Corn Soup", name_gu: "ચીઝ કોર્ન સૂપ", price: "₹110", qty: "200 ml" },
    { name_en: "Veg. Clear Soup", name_gu: "વેજ. ક્લિયર સૂપ", price: "₹110", qty: "200 ml" },
    { name_en: "Minestrone Soup", name_gu: "મિનેસ્ટ્રોને સૂપ", price: "₹120", qty: "200 ml" },
    { name_en: "Veg. Mushroom Soup", name_gu: "વેજ. મશરૂમ સૂપ", price: "₹130", qty: "200 ml" },
    { name_en: "Veg. Manchow Soup", name_gu: "વેજ. મન્ચો સૂપ", price: "₹120", qty: "200 ml" },
    { name_en: "Veg. Hot & Sour Soup", name_gu: "વેજ. હોટ એન્ડ સાવર સૂપ", price: "₹120", qty: "200 ml" },
    { name_en: "Veg. Manchurian Soup", name_gu: "વેજ. મન્ચુરિયન સૂપ", price: "₹130", qty: "200 ml" },
    { name_en: "Lemon Coriander Soup", name_gu: "લેમન કોરિઅન્ડર સૂપ", price: "₹110", qty: "200 ml" },
  ],
  "Sandwich & Fries": [
    { name_en: "Veg. Sandwich", name_gu: "વેજ. સેન્ડવિચ", price: "₹70", qty: "150 gm" },
    { name_en: "Veg. Grilled Sandwich", name_gu: "વેજ. ગ્રિલ સેન્ડવિચ", price: "₹100", qty: "150 gm" },
    { name_en: "Cheese Sandwich", name_gu: "ચીઝ સેન્ડવિચ", price: "₹90", qty: "150 gm" },
    { name_en: "Cheese Grilled Sandwich", name_gu: "ચીઝ ગ્રિલ સેન્ડવિચ", price: "₹110", qty: "150 gm" },
    { name_en: "Bread Butter", name_gu: "બ્રેડ બટર", price: "₹40", qty: "120 gm" },
    { name_en: "Bread Butter Jam", name_gu: "બ્રેડ બટર જામ", price: "₹50", qty: "130 gm" },
    { name_en: "French Fries", name_gu: "ફ્રેન્ચ ફ્રાઈઝ", price: "₹90", qty: "100 gm" },
    { name_en: "Peri Peri French Fries", name_gu: "પેરી પેરી ફ્રેન્ચ ફ્રાઈઝ", price: "₹100", qty: "100 gm" },
  ],
  "Chinese Starter": [
    { name_en: "Veg. Manchurian (Dry/Gravy)", name_gu: "વેજ. મન્ચુરિયન (ડ્રાય/ગ્રેવી)", price: "₹190", qty: "350 gm" },
    { name_en: "Paneer Manchurian (Dry/Gravy)", name_gu: "પનીર મન્ચુરિયન (ડ્રાય/ગ્રેવી)", price: "₹199", qty: "350 gm" },
    { name_en: "Paneer Chilli (Dry/Gravy)", name_gu: "પનીર ચિલી (ડ્રાય/ગ્રેવી)", price: "₹220", qty: "350 gm" },
    { name_en: "Paneer 65", name_gu: "પનીર 65", price: "₹210", qty: "350 gm" },
    { name_en: "Baby Corn Chilli", name_gu: "બેબી કોર્ન ચિલી", price: "₹190", qty: "350 gm" },
    { name_en: "Veg. Spring Roll", name_gu: "વેજ. સ્પ્રિંગ રોલ", price: "₹199", qty: "350 gm" },
    { name_en: "Veg. Crispy", name_gu: "વેજ. ક્રિસ્પી", price: "₹190", qty: "350 gm" },
    { name_en: "Chinese Bhel", name_gu: "ચાઈનીઝ ભેળ", price: "₹199", qty: "350 gm" },
    { name_en: "Dragon Paneer Dry", name_gu: "ડ્રેગન પનીર ડ્રાય", price: "₹230", qty: "350 gm" },
    { name_en: "Paneer Kurkure", name_gu: "પનીર કુરકુરે", price: "₹190", qty: "350 gm" },
    { name_en: "Veg. Lolipop", name_gu: "વેજ. લોલીપોપ", price: "₹190", qty: "350 gm" },
  ],
  "Chinese Noodles & Rice": [
    { name_en: "Veg. Hakka Noodles", name_gu: "વેજ. હક્કા નૂડલ્સ", price: "₹190", qty: "350 gm" },
    { name_en: "Schezwan Noodles", name_gu: "સેઝવાન નૂડલ્સ", price: "₹190", qty: "350 gm" },
    { name_en: "Chilli Garlic Noodles", name_gu: "ચિલી ગાર્લિક નૂડલ્સ", price: "₹190", qty: "350 gm" },
    { name_en: "Veg. Manchurian Noodles", name_gu: "વેજ. મન્ચુરિયન નૂડલ્સ", price: "₹170", qty: "300 gm" },
    { name_en: "Veg. Fried Rice", name_gu: "વેજ. ફ્રાઈડ રાઈસ", price: "₹170", qty: "300 gm" },
    { name_en: "Schezwan Fried Rice", name_gu: "સેઝવાન ફ્રાઈડ રાઈસ", price: "₹170", qty: "300 gm" },
    { name_en: "Chinese Fried Rice", name_gu: "ચાઈનીઝ ફ્રાઈડ રાઈસ", price: "₹180", qty: "300 gm" },
    { name_en: "Manchurian Fried Rice", name_gu: "મન્ચુરિયન ફ્રાઈડ રાઈસ", price: "₹185", qty: "300 gm" },
    { name_en: "Mushroom Fried Rice", name_gu: "મશરૂમ ફ્રાઈડ રાઈસ", price: "₹185", qty: "300 gm" },
  ],
  "Tandoor Starter": [
    { name_en: "Sp. Floris Platter", name_gu: "સ્પે. ફ્લોરિસ પ્લેટર", price: "₹269", qty: "9 Pcs", special: true },
    { name_en: "Paneer Tikka Dry", name_gu: "પનીર ટિક્કા ડ્રાય", price: "₹230", qty: "8 Pcs" },
    { name_en: "Paneer Hariyali Tikka", name_gu: "પનીર હરિયાળી ટિક્કા", price: "₹220", qty: "8 Pcs" },
    { name_en: "Peri Peri Paneer Tikka Dry", name_gu: "પેરી પેરી પનીર ટિક્કા ડ્રાય", price: "₹250", qty: "8 Pcs" },
    { name_en: "Corn Tikki", name_gu: "કોર્ન ટિક્કી", price: "₹190", qty: "8 Pcs" },
    { name_en: "Hara Bhara Kabab", name_gu: "હરા ભરા કબાબ", price: "₹210", qty: "8 Pcs" },
  ],
  "Sizzlers": [
    { name_en: "Sp. Floris Sizzler", name_gu: "સ્પે. ફ્લોરિસ સીઝલર", price: "₹399", qty: "750 gm", special: true },
    { name_en: "Sp. Mix Veg. Grill Sizzler", name_gu: "સ્પે. મિક્સ વેજ. ગ્રિલ સીઝલર", price: "₹350", qty: "750 gm" },
    { name_en: "Sp. Chinese Sizzler", name_gu: "સ્પે. ચાઈનીઝ સીઝલર", price: "₹370", qty: "750 gm" },
    { name_en: "Sp. Paneer Stick Sizzler", name_gu: "સ્પે. પનીર સ્ટિક સીઝલર", price: "₹390", qty: "750 gm" },
  ],
  "Baked Dish": [
    { name_en: "Baked Macaroni", name_gu: "બેકડ મેકરોની", price: "₹199", qty: "250 gm" },
    { name_en: "Baked Macaroni With Paneer/Cheese", name_gu: "બેકડ મેકરોની વિથ પનીર/ચીઝ", price: "₹220", qty: "250 gm" },
    { name_en: "Baked Pasta", name_gu: "બેકડ પાસ્તા", price: "₹190", qty: "250 gm" },
    { name_en: "Baked Pasta With Paneer/Cheese", name_gu: "બેકડ પાસ્તા વિથ પનીર/ચીઝ", price: "₹210", qty: "250 gm" },
  ],
  "Paneer Main Course": [
    { name_en: "Sp. Floris Paneer", name_gu: "સ્પે. ફ્લોરિસ પનીર", price: "₹240", qty: "350 gm", special: true },
    { name_en: "Sp. Paneer Chingari", name_gu: "સ્પે. પનીર ચીંગારી", price: "₹220", qty: "350 gm", special: true },
    { name_en: "Sp. Paneer Lakhani", name_gu: "સ્પે. પનીર લખાણી", price: "₹210", qty: "350 gm" },
    { name_en: "Sp. Paneer Banjara", name_gu: "સ્પે. પનીર બંજારા", price: "₹210", qty: "350 gm" },
    { name_en: "Paneer Laziz", name_gu: "પનીર લઝીઝ", price: "₹210", qty: "350 gm" },
    { name_en: "Paneer Tikka Masala", name_gu: "પનીર ટિક્કા મસાલા", price: "₹210", qty: "300 gm" },
    { name_en: "Paneer Butter Masala", name_gu: "પનીર બટર મસાલા", price: "₹190", qty: "300 gm" },
    { name_en: "Paneer Angara", name_gu: "પનીર અંગારા", price: "₹190", qty: "300 gm" },
    { name_en: "Paneer Toofani", name_gu: "પનીર તૂફાની", price: "₹199", qty: "300 gm" },
    { name_en: "Paneer Tawa Masala", name_gu: "પનીર તવા મસાલા", price: "₹190", qty: "300 gm" },
    { name_en: "Paneer Handi / Kadai / Balti", name_gu: "પનીર હાંડી / કડાઈ / બાલ્ટી", price: "₹199", qty: "300 gm" },
    { name_en: "Paneer Bhurji", name_gu: "પનીર ભુરજી", price: "₹199", qty: "300 gm" },
    { name_en: "Paneer Patiala", name_gu: "પનીર પટિયાલા", price: "₹210", qty: "300 gm" },
    { name_en: "Paneer Kolsanda", name_gu: "પનીર કોલસંદા", price: "₹199", qty: "300 gm" },
    { name_en: "Shahi Paneer", name_gu: "શાહી પનીર", price: "₹199", qty: "300 gm" },
    { name_en: "Paneer Lababdar", name_gu: "પનીર લબાબદાર", price: "₹190", qty: "300 gm" },
    { name_en: "Paneer Chatpata", name_gu: "પનીર ચટપટા", price: "₹190", qty: "300 gm" },
    { name_en: "Paneer Hariyali Masala", name_gu: "પનીર હરિયાળી મસાલા", price: "₹190", qty: "300 gm" },
    { name_en: "Palak Paneer / Matar Paneer", name_gu: "પાલક પનીર / મટર પનીર", price: "₹180", qty: "300 gm" },
  ],
  "Cheese Main Course": [
    { name_en: "Cheese Tawa Masala", name_gu: "ચીઝ તવા મસાલા", price: "₹199", qty: "300 gm" },
    { name_en: "Cheese Butter Masala", name_gu: "ચીઝ બટર મસાલા", price: "₹199", qty: "300 gm" },
    { name_en: "Cheese Paneer Masala", name_gu: "ચીઝ પનીર મસાલા", price: "₹210", qty: "300 gm" },
    { name_en: "Cheese Lababdar", name_gu: "ચીઝ લબાબદાર", price: "₹210", qty: "300 gm" },
    { name_en: "Cheese Kaju Masala", name_gu: "ચીઝ કાજુ મસાલા", price: "₹220", qty: "300 gm" },
  ],
  "Kaju Main Course": [
    { name_en: "Kaju Tawa Masala", name_gu: "કાજુ તવા મસાલા", price: "₹210", qty: "300 gm" },
    { name_en: "Kaju Butter Masala", name_gu: "કાજુ બટર મસાલા", price: "₹220", qty: "300 gm" },
    { name_en: "Kaju Curry", name_gu: "કાજુ કરી", price: "₹220", qty: "300 gm" },
    { name_en: "Kaju Masala", name_gu: "કાજુ મસાલા", price: "₹220", qty: "300 gm" },
    { name_en: "Kaju Handi Masala", name_gu: "કાજુ હાંડી મસાલા", price: "₹220", qty: "300 gm" },
    { name_en: "Kaju Kari (Sweet)", name_gu: "કાજુ કરી (સ્વીટ)", price: "₹230", qty: "300 gm" },
  ],
  "Kofta Main Course": [
    { name_en: "Veg. Kofta", name_gu: "વેજ. કોફ્તા", price: "₹170", qty: "300 gm" },
    { name_en: "Paneer Kofta", name_gu: "પનીર કોફ્તા", price: "₹190", qty: "300 gm" },
    { name_en: "Cheese Kofta", name_gu: "ચીઝ કોફ્તા", price: "₹199", qty: "300 gm" },
    { name_en: "Kaju Kofta", name_gu: "કાજુ કોફ્તા", price: "₹199", qty: "300 gm" },
    { name_en: "Malai Kofta (Sweet)", name_gu: "મલાઈ કોફ્તા (સ્વીટ)", price: "₹180", qty: "300 gm" },
    { name_en: "Kashmiri Kofta (Sweet)", name_gu: "કાશ્મીરી કોફ્તા (સ્વીટ)", price: "₹190", qty: "300 gm" },
  ],
  "Veg. Main Course": [
    { name_en: "Sp. Veg. Floris", name_gu: "સ્પે. વેજ. ફ્લોરિસ", price: "₹220", qty: "350 gm", special: true },
    { name_en: "Veg. Angara", name_gu: "વેજ. અંગારા", price: "₹185", qty: "350 gm" },
    { name_en: "Veg. Toofani", name_gu: "વેજ. તૂફાની", price: "₹180", qty: "350 gm" },
    { name_en: "Veg. Tawa Masala", name_gu: "વેજ. તવા મસાલા", price: "₹180", qty: "350 gm" },
    { name_en: "Veg. Kadai / Handi / Balti", name_gu: "વેજ. કડાઈ/હાંડી/બાલ્ટી", price: "₹190", qty: "300 gm" },
    { name_en: "Veg. Jaipuri", name_gu: "વેજ. જયપુરી", price: "₹180", qty: "300 gm" },
    { name_en: "Veg. Hydrabadi", name_gu: "વેજ. હૈદરાબાદી", price: "₹180", qty: "300 gm" },
    { name_en: "Veg. Kolhapuri", name_gu: "વેજ. કોલ્હાપુરી", price: "₹180", qty: "300 gm" },
    { name_en: "Veg. Makhanwala", name_gu: "વેજ. મખનવાલા", price: "₹180", qty: "300 gm" },
    { name_en: "Veg. Shahi Korma", name_gu: "વેજ. શાહી કોર્મા", price: "₹190", qty: "300 gm" },
    { name_en: "Veg. Nawabi", name_gu: "વેજ. નવાબી", price: "₹190", qty: "300 gm" },
    { name_en: "Veg. Diwani Handi", name_gu: "વેજ. દીવાની હાંડી", price: "₹190", qty: "300 gm" },
    { name_en: "Veg. Chatpata", name_gu: "વેજ. ચટપટા", price: "₹180", qty: "300 gm" },
    { name_en: "Mushroom Masala", name_gu: "મશરૂમ મસાલા", price: "₹190", qty: "300 gm" },
    { name_en: "Navratan Korma (Sweet)", name_gu: "નવરત્ન કોર્મા (સ્વીટ)", price: "₹199", qty: "300 gm" },
    { name_en: "Mix Veg.", name_gu: "મિક્સ વેજ", price: "₹150", qty: "300 gm" },
    { name_en: "Chana Masala", name_gu: "ચણા મસાલા", price: "₹140", qty: "300 gm" },
    { name_en: "Sev Tomato", name_gu: "સેવ ટામેટા", price: "₹140", qty: "300 gm" },
    { name_en: "Lasaniya Bataka", name_gu: "લસણિયા બટાકા", price: "₹140", qty: "300 gm" },
    { name_en: "Aahi Tikhari", name_gu: "આહી તીખારી", price: "₹130", qty: "300 gm" },
    { name_en: "Aloo Jeera / Palak / Mutter", name_gu: "આલુ જીરા/પાલક/મટર", price: "₹130", qty: "300 gm" },
    { name_en: "Sukhi Bhaji", name_gu: "સુકી ભાજી", price: "₹140", qty: "300 gm" },
    { name_en: "Aloo (Punjabi)", name_gu: "આલુ (પંજાબી)", price: "₹130", qty: "300 gm" },
    { name_en: "Plain Palak", name_gu: "પ્લેન પાલક", price: "₹130", qty: "300 gm" },
  ],
  "Dal Mazedar": [
    { name_en: "Dal Fry", name_gu: "દાળ ફ્રાય", price: "₹110", qty: "300 gm" },
    { name_en: "Dal Fry Butter", name_gu: "દાળ ફ્રાય બટર", price: "₹120", qty: "300 gm" },
    { name_en: "Dal Fry Tadka", name_gu: "દાળ ફ્રાય તડકા", price: "₹130", qty: "300 gm" },
    { name_en: "Dal Palak", name_gu: "દાળ પાલક", price: "₹120", qty: "300 gm" },
    { name_en: "Dal Makhani", name_gu: "દાળ મખની", price: "₹160", qty: "300 gm" },
  ],
  "Tandoori Roti": [
    { name_en: "Plain Tandoori Roti", name_gu: "પ્લેન તંદૂરી રોટી", price: "₹20", qty: "1 Pcs" },
    { name_en: "Butter Tandoori Roti", name_gu: "બટર તંદૂરી રોટી", price: "₹23", qty: "1 Pcs" },
    { name_en: "Plain Tandoori Paratha", name_gu: "પ્લેન તંદૂરી પરાઠા", price: "₹42", qty: "1 Pcs" },
    { name_en: "Butter Tandoori Paratha", name_gu: "બટર તંદૂરી પરાઠા", price: "₹45", qty: "1 Pcs" },
    { name_en: "Lachha Paratha", name_gu: "લચ્છા પરાઠા", price: "₹45", qty: "1 Pcs" },
    { name_en: "Plain Naan", name_gu: "પ્લેન નાન", price: "₹45", qty: "1 Pcs" },
    { name_en: "Butter Naan", name_gu: "બટર નાન", price: "₹50", qty: "1 Pcs" },
    { name_en: "Cheese Naan", name_gu: "ચીઝ નાન", price: "₹90", qty: "1 Pcs" },
    { name_en: "Stuff Naan", name_gu: "સ્ટફ નાન", price: "₹90", qty: "1 Pcs" },
    { name_en: "Garlic Naan", name_gu: "ગાર્લિક નાન", price: "₹90", qty: "1 Pcs" },
    { name_en: "Cheese Garlic Naan", name_gu: "ચીઝ ગાર્લિક નાન", price: "₹110", qty: "1 Pcs" },
    { name_en: "Cheese Chilly Garlic Naan", name_gu: "ચીઝ ચિલી ગાર્લિક નાન", price: "₹120", qty: "1 Pcs" },
    { name_en: "Plain Kulcha", name_gu: "પ્લેન કુલચા", price: "₹45", qty: "1 Pcs" },
    { name_en: "Butter Kulcha", name_gu: "બટર કુલચા", price: "₹50", qty: "1 Pcs" },
  ],
  "Tawa Roti": [
    { name_en: "Plain Chapati", name_gu: "પ્લેન ચપાટી", price: "₹18", qty: "1 Pcs" },
    { name_en: "Butter Chapati", name_gu: "બટર ચપાટી", price: "₹20", qty: "1 Pcs" },
    { name_en: "Plain Chapati Paratha", name_gu: "પ્લેન ચપાટી પરાઠા", price: "₹35", qty: "1 Pcs" },
    { name_en: "Butter Chapati Paratha", name_gu: "બટર ચપાટી પરાઠા", price: "₹40", qty: "1 Pcs" },
    { name_en: "Aloo Paratha with Curd", name_gu: "આલુ પરાઠા (દહીં સાથે)", price: "₹100", qty: "1 Pcs" },
  ],
  "Rice / Pulao / Biryani": [
    { name_en: "Plain Rice", name_gu: "પ્લેન રાઈસ", price: "₹90", qty: "250 gm" },
    { name_en: "Steam Rice", name_gu: "સ્ટીમ રાઈસ", price: "₹95", qty: "250 gm" },
    { name_en: "Jeera Rice", name_gu: "જીરા રાઈસ", price: "₹150", qty: "250 gm" },
    { name_en: "Veg. Pulao", name_gu: "વેજ પુલાવ", price: "₹140", qty: "300 gm" },
    { name_en: "Peas Pulao", name_gu: "મટર પુલાવ", price: "₹190", qty: "300 gm" },
    { name_en: "Kaju Pulao", name_gu: "કાજુ પુલાવ", price: "₹170", qty: "300 gm" },
    { name_en: "Veg. Biryani (with raita)", name_gu: "વેજ બિરયાની (રાયતા સાથે)", price: "₹190", qty: "300 gm" },
    { name_en: "Hyderabadi Biryani (with raita)", name_gu: "હૈદરાબાદી બિરયાની (રાયતા સાથે)", price: "₹199", qty: "300 gm" },
    { name_en: "Handi Dum Biryani (with raita)", name_gu: "હાંડી દમ બિરયાની (રાયતા સાથે)", price: "₹199", qty: "300 gm" },
    { name_en: "Kashmiri Pulao (Sweet)", name_gu: "કાશ્મીરી પુલાવ (સ્વીટ)", price: "₹170", qty: "300 gm" },
  ],
  "Salad & Raita": [
    { name_en: "Green Salad", name_gu: "ગ્રીન સલાડ", price: "₹75", qty: "200 gm" },
    { name_en: "Tomato Salad", name_gu: "ટામેટા સલાડ", price: "₹65", qty: "200 gm" },
    { name_en: "Kachumber Salad", name_gu: "કચુંબર સલાડ", price: "₹65", qty: "200 gm" },
    { name_en: "Kachumber Salad with Curd", name_gu: "કચુંબર સલાડ વિથ દહીં", price: "₹75", qty: "200 gm" },
    { name_en: "Veg. Raita", name_gu: "વેજ રાયતા", price: "₹65", qty: "200 gm" },
    { name_en: "Boondi Raita", name_gu: "બૂંદી રાયતા", price: "₹65", qty: "200 gm" },
    { name_en: "Pineapple Raita", name_gu: "પાઇનએપલ રાયતા", price: "₹75", qty: "200 gm" },
    { name_en: "Butter Milk", name_gu: "બટર મિલ્ક", price: "₹35", qty: "200 ml" },
    { name_en: "Masala Butter Milk", name_gu: "મસાલા બટર મિલ્ક", price: "₹40", qty: "200 ml" },
    { name_en: "Plain Curd", name_gu: "પ્લેન દહીં", price: "₹40", qty: "100 gm" },
  ],
  "Papad": [
    { name_en: "Roasted Papad", name_gu: "રોસ્ટેડ પાપડ", price: "₹25", qty: "1 Pcs" },
    { name_en: "Fry Papad", name_gu: "ફ્રાય પાપડ", price: "₹28", qty: "1 Pcs" },
    { name_en: "Masala Papad", name_gu: "મસાલા પાપડ", price: "₹40", qty: "1 Pcs" },
    { name_en: "Sev Masala Papad", name_gu: "સેવ મસાલા પાપડ", price: "₹45", qty: "1 Pcs" },
    { name_en: "Cheese Masala Papad", name_gu: "ચીઝ મસાલા પાપડ", price: "₹50", qty: "1 Pcs" },
    { name_en: "Khichiya Masala Papad", name_gu: "ખીચીયા મસાલા પાપડ", price: "₹45", qty: "1 Pcs" },
  ],
  "Ice Cream & Dessert": [
    { name_en: "Vanilla Ice Cream", name_gu: "વેનિલા આઈસક્રીમ", price: "₹50", qty: "100 ml" },
    { name_en: "Kaju Draksh Ice Cream", name_gu: "કાજુ દ્રાક્ષ આઈસક્રીમ", price: "₹55", qty: "100 ml" },
    { name_en: "American Nuts Ice Cream", name_gu: "અમેરિકન નટ્સ આઈસક્રીમ", price: "₹55", qty: "100 ml" },
    { name_en: "Butter Scotch Ice Cream", name_gu: "બટર સ્કોચ આઈસક્રીમ", price: "₹50", qty: "100 ml" },
    { name_en: "Rajbhog Ice Cream", name_gu: "રાજભોગ આઈસક્રીમ", price: "₹55", qty: "100 ml" },
    { name_en: "Badam Carnival Ice Cream", name_gu: "બદામ કાર્નિવલ આઈસક્રીમ", price: "₹55", qty: "100 ml" },
    { name_en: "Gulab Jamun", name_gu: "ગુલાબ જામુન", price: "₹50", qty: "4 Pcs" },
  ],
  "Beverages & Mocktails": [
    { name_en: "Fresh Lemon Water", name_gu: "ફ્રેશ લેમન વોટર", price: "₹55", qty: "200 ml" },
    { name_en: "Fresh Lemon Soda", name_gu: "ફ્રેશ લેમન સોડા", price: "₹65", qty: "200 ml" },
    { name_en: "Mint Mojito", name_gu: "મિન્ટ મોજીતો", price: "₹120", qty: "200 ml" },
    { name_en: "Blue Lagoon", name_gu: "બ્લુ લગૂન", price: "₹120", qty: "200 ml" },
    { name_en: "Strawberry Punch", name_gu: "સ્ટ્રોબેરી પંચ", price: "₹120", qty: "200 ml" },
    { name_en: "Pineapple Blossom", name_gu: "પાઇનએપલ બ્લોસમ", price: "₹130", qty: "200 ml" },
    { name_en: "Fruit Punch", name_gu: "ફ્રૂટ પંચ", price: "₹130", qty: "200 ml" },
    { name_en: "Soft Drinks", name_gu: "સોફ્ટ ડ્રિંક્સ", price: "MRP", qty: "—" },
    { name_en: "Mineral Water", name_gu: "મિનરલ વોટર", price: "MRP", qty: "1 Ltr" },
  ],
  "Lassi & Shake": [
    { name_en: "Sp. Floris Lassi", name_gu: "સ્પે. ફ્લોરિસ લસ્સી", price: "₹100", qty: "200 ml", special: true },
    { name_en: "Mango Almond Lassi", name_gu: "મેંગો આલ્મન્ડ લસ્સી", price: "₹100", qty: "200 ml" },
    { name_en: "Plain Lassi", name_gu: "પ્લેન લસ્સી", price: "₹80", qty: "200 ml" },
    { name_en: "Oreo Cookies Shake", name_gu: "ઓરિયો કૂકીઝ શેક", price: "₹110", qty: "200 ml" },
    { name_en: "Kit Kat Shake", name_gu: "કિટકેટ શેક", price: "₹110", qty: "200 ml" },
    { name_en: "Vanilla Milkshake", name_gu: "વેનિલા મિલ્કશેક", price: "₹110", qty: "200 ml" },
    { name_en: "Chocolate Milkshake", name_gu: "ચોકલેટ મિલ્કશેક", price: "₹110 / ₹130", qty: "200 ml" },
    { name_en: "Kaju Draksh Milkshake", name_gu: "કાજુ દ્રાક્ષ મિલ્કશેક", price: "₹110 / ₹130", qty: "200 ml" },
    { name_en: "Badam Carnival Milkshake", name_gu: "બદામ કાર્નિવલ મિલ્કશેક", price: "₹110 / ₹130", qty: "200 ml" },
    { name_en: "Cold Coffee", name_gu: "કોલ્ડ કોફી", price: "₹90 / ₹100", qty: "200 ml" },
  ],
  "Fix Thali & Combos": [
    { name_en: "Fix Punjabi Thali", name_gu: "ફિક્સ પંજાબી થાળી", price: "₹190", qty: "Full Meal", special: false,
      desc: "Paneer Main Course, Veg. Main Course, Dal Fry, Jeera Rice, Roasted Papad, Butter Milk, 3 Btr. Tandoori / 4 Btr. Chapati, Sweet, Onion / Lemon / Pickle" },
    { name_en: "Delux Fix Punjabi Thali", name_gu: "ડિલક્સ ફિક્સ પંજાબી થાળી", price: "₹210", qty: "Full Meal",
      desc: "Tomato Soup + Paneer Main Course, Veg. Main Course, Dal Fry, Jeera Rice, Roasted Papad, Butter Milk, 3 Btr. Tandoori / 4 Btr. Chapati, Sweet, Onion / Lemon / Pickle" },
    { name_en: "Super Delux Fix Punjabi Thali", name_gu: "સુપર ડિલક્સ ફિક્સ પંજાબી થાળી", price: "₹230", qty: "Full Meal", special: true,
      desc: "Tomato Soup, Veg. Manchurian Dry (3 pcs.), Paneer & Veg. Main Course, Dal Fry, Jeera Rice, Roasted Papad, Butter Milk, Tandoori / Chapati, Sweet, Ice Cream" },
    { name_en: "Unlimited Lunch / Dinner", name_gu: "અનલિમિટેડ લંચ / ડિનર", price: "₹349", qty: "Min. 3 Person", special: true,
      desc: "Any One Soup, Green Salad, Veg. Manchurian Dry, Paneer & Veg. Main Course, Dal Fry, Jeera Rice, Roasted Papad, Butter Milk, Tandoori / Chapati, Sweet, Ice Cream (One Time)" },
  ],
};

// ─── Category Icons ───────────────────────────────────────────────────────────
const CATEGORY_ICONS = {
  "Soup": "🍲",
  "Sandwich & Fries": "🥪",
  "Chinese Starter": "🥡",
  "Chinese Noodles & Rice": "🍜",
  "Tandoor Starter": "🔥",
  "Sizzlers": "⚡",
  "Baked Dish": "🍝",
  "Paneer Main Course": "🧀",
  "Cheese Main Course": "🫕",
  "Kaju Main Course": "🥜",
  "Kofta Main Course": "🍛",
  "Veg. Main Course": "🌿",
  "Dal Mazedar": "🫙",
  "Tandoori Roti": "🫓",
  "Tawa Roti": "🥞",
  "Rice / Pulao / Biryani": "🍚",
  "Salad & Raita": "🥗",
  "Papad": "🫔",
  "Ice Cream & Dessert": "🍨",
  "Beverages & Mocktails": "🥤",
  "Lassi & Shake": "🥛",
  "Fix Thali & Combos": "🍽️",
};

// ─── Food image placeholders using unsplash food categories ──────────────────
const CATEGORY_IMAGES = {
  "Soup": "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=400&q=80",
  "Sandwich & Fries": "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80",
  "Chinese Starter": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80",
  "Chinese Noodles & Rice": "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80",
  "Tandoor Starter": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
  "Sizzlers": "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
  "Baked Dish": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
  "Paneer Main Course": "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&q=80",
  "Cheese Main Course": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&q=80",
  "Kaju Main Course": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
  "Kofta Main Course": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
  "Veg. Main Course": "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&q=80",
  "Dal Mazedar": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
  "Tandoori Roti": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
  "Tawa Roti": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
  "Rice / Pulao / Biryani": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
  "Salad & Raita": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
  "Papad": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80",
  "Ice Cream & Dessert": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80",
  "Beverages & Mocktails": "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&q=80",
  "Lassi & Shake": "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&q=80",
  "Fix Thali & Combos": "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&q=80",
};

const CATEGORIES = Object.keys(MENU_DATA);

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg-primary: #0A0A0A;
    --bg-secondary: #121212;
    --surface: #1A1A1A;
    --border: rgba(255,255,255,0.07);
    --fire: #FF6A00;
    --fire-light: #FFB347;
    --fire-glow: #FF8C00;
    --ember: #CC5500;
    --text: #FFFFFF;
    --text-muted: #A1A1AA;
    --text-dim: #6B7280;
    --fire-grad: linear-gradient(90deg, #FF6A00, #FFB347);
    --glow: 0 0 24px rgba(255,106,0,0.35);
  }

  body { background: var(--bg-primary); color: var(--text); font-family: 'DM Sans', sans-serif; }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg-secondary); }
  ::-webkit-scrollbar-thumb { background: var(--fire); border-radius: 4px; }

  /* Animations */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 10px rgba(255,106,0,0.3); }
    50% { box-shadow: 0 0 25px rgba(255,106,0,0.6); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-4px); }
  }

  .fade-up { animation: fadeUp 0.5s ease forwards; }

  /* Category nav */
  .cat-nav {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(10,10,10,0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    overflow-x: auto;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }
  .cat-nav::-webkit-scrollbar { display: none; }
  .cat-nav-inner {
    display: flex;
    gap: 4px;
    padding: 10px 16px;
    width: max-content;
    min-width: 100%;
  }
  .cat-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border-radius: 50px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-muted);
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.25s ease;
    position: relative;
  }
  .cat-btn:hover {
    color: var(--fire-light);
    border-color: rgba(255,106,0,0.3);
    background: rgba(255,106,0,0.06);
  }
  .cat-btn.active {
    background: linear-gradient(135deg, rgba(255,106,0,0.2), rgba(255,179,71,0.1));
    border-color: rgba(255,106,0,0.5);
    color: var(--fire-light);
    box-shadow: 0 0 16px rgba(255,106,0,0.2);
  }
  .cat-btn.active::after {
    content: '';
    position: absolute;
    bottom: -11px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 2px;
    background: var(--fire-grad);
    border-radius: 2px;
  }

  /* Search */
  .search-wrap {
    position: relative;
  }
  .search-input {
    width: 100%;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 12px 16px 12px 44px;
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .search-input:focus {
    border-color: rgba(255,106,0,0.5);
    box-shadow: 0 0 0 3px rgba(255,106,0,0.08);
  }
  .search-input::placeholder { color: var(--text-dim); }

  /* Cards */
  .item-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    display: flex;
    align-items: stretch;
    position: relative;
  }
  .item-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 32px rgba(255,106,0,0.18), 0 2px 8px rgba(0,0,0,0.5);
    border-color: rgba(255,106,0,0.25);
  }
  .item-card.special::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: var(--fire-grad);
  }

  /* Image */
  .item-img {
    width: 96px;
    min-width: 96px;
    height: 96px;
    object-fit: cover;
    border-radius: 0 12px 12px 0;
    transition: transform 0.4s ease;
  }
  @media (min-width: 640px) {
    .item-img { width: 110px; min-width: 110px; height: 110px; }
  }
  .item-card:hover .item-img { transform: scale(1.07); }
  .img-placeholder {
    width: 96px;
    min-width: 96px;
    height: 96px;
    background: linear-gradient(135deg, #1f1f1f, #2a1a0a);
    border-radius: 0 12px 12px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
  }
  @media (min-width: 640px) {
    .img-placeholder { width: 110px; min-width: 110px; height: 110px; }
  }

  /* Veg dot */
  .veg-dot {
    width: 14px; height: 14px;
    border: 2px solid #22c55e;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .veg-dot::after {
    content: '';
    width: 6px; height: 6px;
    background: #22c55e;
    border-radius: 50%;
  }

  /* Fire text gradient */
  .fire-text {
    background: var(--fire-grad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Section heading */
  .section-heading {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--border);
  }
  .section-heading-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(255,106,0,0.3), transparent);
  }

  /* Badge */
  .badge-special {
    background: linear-gradient(90deg, rgba(255,106,0,0.2), rgba(255,179,71,0.15));
    border: 1px solid rgba(255,106,0,0.3);
    color: var(--fire-light);
    font-size: 9px;
    font-weight: 600;
    padding: 2px 7px;
    border-radius: 50px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    animation: pulse-glow 2s ease infinite;
  }

  /* Hero */
  .hero {
    background: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(10,10,10,1)),
      radial-gradient(ellipse at 50% 0%, rgba(255,106,0,0.3) 0%, transparent 60%);
    padding: 48px 24px 32px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center top, rgba(255,106,0,0.15), transparent 70%);
    pointer-events: none;
  }

  /* Count badge */
  .count-badge {
    background: rgba(255,106,0,0.15);
    color: var(--fire-light);
    border: 1px solid rgba(255,106,0,0.2);
    font-size: 11px;
    padding: 2px 8px;
    border-radius: 50px;
    font-weight: 500;
  }
`;

// ─── Item Card ────────────────────────────────────────────────────────────────
function ItemCard({ item, categoryIcon, animDelay = 0 }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`item-card fade-up${item.special ? " special" : ""}`}
      style={{ animationDelay: `${animDelay}ms`, animationFillMode: "both" }}
    >
      {/* Content */}
      <div style={{ flex: 1, padding: "14px 12px 14px 16px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 8, minWidth: 0 }}>
        {/* Top row */}
        <div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 4 }}>
            <div className="veg-dot" style={{ marginTop: 3 }} />
            <div style={{ minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'DM Sans'", fontWeight: 600, fontSize: 14, color: "#fff", lineHeight: 1.3 }}>
                  {item.name_en}
                </span>
                {item.special && <span className="badge-special">Chef's Pick</span>}
              </div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "var(--text-dim)", marginTop: 2, lineHeight: 1.4 }}>
                {item.name_gu}
              </div>
            </div>
          </div>
          {item.desc && (
            <div style={{ fontSize: 11, color: "var(--text-dim)", lineHeight: 1.5, marginLeft: 22, marginTop: 4 }}>
              {item.desc}
            </div>
          )}
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginLeft: 22 }}>
          <div>
            <span className="fire-text" style={{ fontFamily: "'Cormorant Garamond'", fontWeight: 700, fontSize: 18, letterSpacing: "-0.3px" }}>
              {item.price}
            </span>
            <span style={{ fontSize: 11, color: "var(--text-dim)", marginLeft: 6 }}>{item.qty}</span>
          </div>
        </div>
      </div>

      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", borderRadius: "0 16px 16px 0" }}>
        {imgError ? (
          <div className="img-placeholder">{categoryIcon}</div>
        ) : (
          <img
            className="item-img"
            src={`https://source.unsplash.com/featured/200x200?${encodeURIComponent(item.name_en.split(" ").slice(0, 2).join("+") + ",food")}`}
            alt={item.name_en}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>
    </div>
  );
}

// ─── Category Section ─────────────────────────────────────────────────────────
function CategorySection({ category, items }) {
  const icon = CATEGORY_ICONS[category] || "🍽️";
  return (
    <section id={`cat-${category.replace(/\s+/g, "-")}`} style={{ marginBottom: 48 }}>
      {/* Section Header */}
      <div className="section-heading">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>{icon}</span>
          <span style={{
            fontFamily: "'Cormorant Garamond'",
            fontSize: 22,
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.3px"
          }}>
            {category}
          </span>
          <span className="count-badge">{items.length} items</span>
        </div>
        <div className="section-heading-line" />
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
        gap: 12,
      }}>
        {items.map((item, i) => (
          <ItemCard
            key={item.name_en}
            item={item}
            categoryIcon={icon}
            animDelay={i * 40}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function FlorisMenu() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const catNavRef = useRef(null);
  const sectionRefs = useRef({});
  const activeCatBtnRef = useRef(null);

  // Filtered data
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return MENU_DATA;
    const q = searchQuery.toLowerCase();
    const result = {};
    Object.entries(MENU_DATA).forEach(([cat, items]) => {
      const filtered = items.filter(
        item => item.name_en.toLowerCase().includes(q) || item.name_gu.includes(q)
      );
      if (filtered.length) result[cat] = filtered;
    });
    return result;
  }, [searchQuery]);

  const filteredCategories = Object.keys(filteredData);

  // Scroll spy
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("cat-", "").replace(/-/g, " ");
            const match = CATEGORIES.find(c => c.replace(/\s+/g, " ") === id.replace(/-/g, " "));
            if (match) setActiveCategory(match);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-80px 0px -60% 0px" }
    );
    Object.values(sectionRefs.current).forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, [filteredData]);

  // Scroll active cat button into view
  useEffect(() => {
    if (activeCatBtnRef.current && catNavRef.current) {
      const nav = catNavRef.current;
      const btn = activeCatBtnRef.current;
      const btnLeft = btn.offsetLeft;
      const btnWidth = btn.offsetWidth;
      const navWidth = nav.offsetWidth;
      nav.scrollTo({ left: btnLeft - navWidth / 2 + btnWidth / 2, behavior: "smooth" });
    }
  }, [activeCategory]);

  const scrollToCategory = (cat) => {
    setActiveCategory(cat);
    const el = document.getElementById(`cat-${cat.replace(/\s+/g, "-")}`);
    if (el) {
      const offset = 68;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const totalItems = Object.values(MENU_DATA).flat().length;

  return (
    <>
      <style>{styles}</style>
      <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>

        {/* Hero */}
        <div className="hero">
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16,
              background: "rgba(255,106,0,0.12)", border: "1px solid rgba(255,106,0,0.25)",
              borderRadius: "50px", padding: "6px 16px" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e",
                boxShadow: "0 0 8px #22c55e", display: "inline-block", animation: "float 2s ease infinite" }} />
              <span style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.5px" }}>Pure Veg · Patan, Gujarat</span>
            </div>

            <h1 style={{ fontFamily: "'Cormorant Garamond'", fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 700, letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 8 }}>
              <span className="fire-text">Floris</span>
              <br />
              <span style={{ color: "var(--text-muted)", fontSize: "0.6em", fontWeight: 400, letterSpacing: 0 }}>
                Restaurant & Banquet
              </span>
            </h1>

            <p style={{ color: "var(--text-dim)", fontSize: 13, marginTop: 12 }}>
              {CATEGORIES.length} categories · {totalItems}+ dishes
            </p>
          </div>
        </div>

        {/* Search */}
        <div style={{ padding: "16px 16px 8px", background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}>
          <div className="search-wrap" style={{ maxWidth: 600, margin: "0 auto" }}>
            <svg style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
              width: 18, height: 18, color: "var(--text-dim)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              className="search-input"
              placeholder="Search dishes... (e.g. Paneer, Biryani)"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                  background: "none", border: "none", cursor: "pointer", color: "var(--text-dim)", fontSize: 16 }}>
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Nav */}
        <div className="cat-nav" ref={catNavRef}>
          <div className="cat-nav-inner">
            {filteredCategories.map(cat => (
              <button
                key={cat}
                ref={cat === activeCategory ? activeCatBtnRef : null}
                className={`cat-btn${cat === activeCategory ? " active" : ""}`}
                onClick={() => scrollToCategory(cat)}
              >
                <span style={{ fontSize: 16 }}>{CATEGORY_ICONS[cat] || "🍽️"}</span>
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Content */}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px 80px" }}>
          {filteredCategories.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-dim)" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <div style={{ fontSize: 18, fontFamily: "'Cormorant Garamond'", color: "var(--text-muted)" }}>No dishes found</div>
              <div style={{ fontSize: 13, marginTop: 8 }}>Try a different keyword</div>
            </div>
          ) : (
            filteredCategories.map(cat => (
              <div
                key={cat}
                ref={el => (sectionRefs.current[cat] = el)}
                id={`cat-${cat.replace(/\s+/g, "-")}`}
              >
                <CategorySection category={cat} items={filteredData[cat]} />
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", padding: "24px 16px 40px",
          borderTop: "1px solid var(--border)", background: "var(--bg-secondary)" }}>
          <div className="fire-text" style={{ fontFamily: "'Cormorant Garamond'", fontSize: 20, fontWeight: 700 }}>
            Floris Restaurant & Banquet
          </div>
          <div style={{ color: "var(--text-dim)", fontSize: 12, marginTop: 6 }}>
            1st Floor, Mashruwala Complex, Opp. New Circuit House, Patan-Chanasma Highway, Patan
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12,
            background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: "50px", padding: "4px 12px" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
            <span style={{ fontSize: 11, color: "#22c55e" }}>100% Pure Vegetarian</span>
          </div>
        </div>
      </div>
    </>
  );
}