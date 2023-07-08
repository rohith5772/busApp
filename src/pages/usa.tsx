import React, { useRef } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';

import { useEffect,useState } from 'react'
//import './homePage.css';
import axios from "axios";
//import hydImg from './hyd-map.png';
import Select from "react-select";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import Loader from '../components/loader';
//map
//from,to text fields
//search button

//farecomparision button
//farecomparision page


const India = () => {
  const [data, setData] = useState(null);
  const [startval, setstartval] = useState("");
  const [endval, setendval] = useState("");
  const [loading, setLoading] = useState(false);
  var ref = useRef(null);
  //const myElement = useRef(null);
  //const router = useNavigate();
  const router = useRouter();
  const optionList = [
    {value: "12, Road, Jubilee Enclave", label:"12, Road, Jubilee Enclave"},
    {value: "A G Colony", label:"A G Colony"},
    {value: "A.S.Rao Nagar Bus Stop", label:"A.S.Rao Nagar Bus Stop"},
    {value: "AGRL Colony", label:"AGRL Colony"},
    {value: "AOC", label:"AOC"},
    {value: "AOC Gate", label:"AOC Gate"},
    {value: "APIIC colony(ZTS)", label:"APIIC colony(ZTS)"},
    {value: "Abdullapurmet", label:"Abdullapurmet"},
    {value: "Abids Bus Stop", label:"Abids Bus Stop"},
    {value: "Accountant General Office", label:"Accountant General Office"},
    {value: "Acharya N G Ranga Agricultural University", label:"Acharya N G Ranga Agricultural University"},
    {value: "Adda Gutta", label:"Adda Gutta"},
    {value: "Adibatla", label:"Adibatla"},
    {value: "Adikmet", label:"Adikmet"},
    {value: "Adraspally", label:"Adraspally"},
    {value: "Afzalgunj Bus Stop", label:"Afzalgunj Bus Stop"},
    {value: "Agapally", label:"Agapally"},
    {value: "Aghapura", label:"Aghapura"},
    {value: "Ahmed Nagar", label:"Ahmed Nagar"},
    {value: "Ahobhil Mutt", label:"Ahobhil Mutt"},
    {value: "Air Force Academy(Dundigal)", label:"Air Force Academy(Dundigal)"},
    {value: "Ajilapur", label:"Ajilapur"},
    {value: "Akanpally", label:"Akanpally"},
    {value: "Akulamilaram", label:"Akulamilaram"},
    {value: "Aliabad", label:"Aliabad"},
    {value: "Aliabad(Shamirpet)", label:"Aliabad(Shamirpet)"},
    {value: "Alinagar", label:"Alinagar"},
    {value: "Alind", label:"Alind"},
    {value: "Alkapuri Bus Stop", label:"Alkapuri Bus Stop"},
    {value: "Allwyn Colony Bus Stop", label:"Allwyn Colony Bus Stop"},
    {value: "Almasguda Bus Stop", label:"Almasguda Bus Stop"},
    {value: "Alugadda Bhavi", label:"Alugadda Bhavi"},
    {value: "Alwal Bus Station", label:"Alwal Bus Station"},
    {value: "Alwal Police Station", label:"Alwal Police Station"},
    {value: "Ambedkar College Stop", label:"Ambedkar College Stop"},
    {value: "Ambedkar Nagar(Chinthal Basthi)", label:"Ambedkar Nagar(Chinthal Basthi)"},
    {value: "Ambedkar Nagar(Kapra)", label:"Ambedkar Nagar(Kapra)"},
    {value: "Amberpet Bus Station", label:"Amberpet Bus Station"},
    {value: "Amberpet Chowrasta Bus Stop", label:"Amberpet Chowrasta Bus Stop"},
    {value: "Amdapur", label:"Amdapur"},
    {value: "Amdur Solakpally Rd", label:"Amdur Solakpally Rd"},
    {value: "Ameerpet Bus Station", label:"Ameerpet Bus Station"},
    {value: "Amuguda Bus Stop", label:"Amuguda Bus Stop"},
    {value: "Anajpur", label:"Anajpur"},
    {value: "Anand Bagh Gate", label:"Anand Bagh Gate"},
    {value: "Anand Theatre", label:"Anand Theatre"},
    {value: "Anandbag Bus Stop", label:"Anandbag Bus Stop"},
    {value: "Anantharam", label:"Anantharam"},
    {value: "Ankireddipalli Bus Stop", label:"Ankireddipalli Bus Stop"},
    {value: "Annapurna Colony", label:"Annapurna Colony"},
    {value: "Annaram(prakruthi nivas)", label:"Annaram(prakruthi nivas)"},
    {value: "Anutex", label:"Anutex"},
    {value: "Apollo Pharmacy(Madhapur)", label:"Apollo Pharmacy(Madhapur)"},
    {value: "Apollo Pharmacy(Malakpet)", label:"Apollo Pharmacy(Malakpet)"},
    {value: "Appa Reddy Guda", label:"Appa Reddy Guda"},
    {value: "Apuroopa Bus Stop", label:"Apuroopa Bus Stop"},
    {value: "Aramaisamma Tent House", label:"Aramaisamma Tent House"},
    {value: "Aramghar(Shivarampally)", label:"Aramghar(Shivarampally)"},
    {value: "Army College Of Dental Sciences", label:"Army College Of Dental Sciences"},
    {value: "Arts College MMTS", label:"Arts College MMTS"},
    {value: "Arundhathi Colony", label:"Arundhathi Colony"},
    {value: "Arutla", label:"Arutla"},
    {value: "Asbestas Colony Bus Stop", label:"Asbestas Colony Bus Stop"},
    {value: "Ashok Gardens", label:"Ashok Gardens"},
    {value: "Ashok Nagar(Kavadiguda)", label:"Ashok Nagar(Kavadiguda)"},
    {value: "Ashoknagar(Lingampally)", label:"Ashoknagar(Lingampally)"},
    {value: "Asif Nagar Bus Stop", label:"Asif Nagar Bus Stop"},
    {value: "Assembly", label:"Assembly"},
    {value: "Athwelli", label:"Athwelli"},
    {value: "Attapur", label:"Attapur"},
    {value: "Aushapur", label:"Aushapur"},
    {value: "Aushapur Railway Gate", label:"Aushapur Railway Gate"},
    {value: "Aware Global Hospital", label:"Aware Global Hospital"},
    {value: "Azampura", label:"Azampura"},
    {value: "Aziz Nagar", label:"Aziz Nagar"},
    {value: "Azzinatanda", label:"Azzinatanda"},
    {value: "B Pally(Gopalpuram)", label:"B Pally(Gopalpuram)"},
    {value: "BHEL", label:"BHEL"},
    {value: "BHEL Hospital", label:"BHEL Hospital"},
    {value: "BN Reddy Nagar Bus Stop", label:"BN Reddy Nagar Bus Stop"},
    {value: "Baba Nagar", label:"Baba Nagar"},
    {value: "Babika Chasma(Charminar)", label:"Babika Chasma(Charminar)"},
    {value: "Bacharam", label:"Bacharam"},
    {value: "Bachupally", label:"Bachupally"},
    {value: "Bada Bazar", label:"Bada Bazar"},
    {value: "Badangpet Bus Stop", label:"Badangpet Bus Stop"},
    {value: "Badichowdi", label:"Badichowdi"},
    {value: "Baghlingampally", label:"Baghlingampally"},
    {value: "Bahadurpally", label:"Bahadurpally"},
    {value: "Bakaram", label:"Bakaram"},
    {value: "Balaji Nagar bus stop(Balaji Nagar)", label:"Balaji Nagar bus stop(Balaji Nagar)"},
    {value: "Balanagar Bus Stop", label:"Balanagar Bus Stop"},
    {value: "Balapur", label:"Balapur"},
    {value: "Balapur X roads", label:"Balapur X roads"},
    {value: "Balijaguda", label:"Balijaguda"},
    {value: "Balkampet", label:"Balkampet"},
    {value: "Bandavirala", label:"Bandavirala"},
    {value: "Bandlaguda", label:"Bandlaguda"},
    {value: "Bandlaguda(Chandrayanagutta)", label:"Bandlaguda(Chandrayanagutta)"},
    {value: "Bandlaguda(Nagaram)", label:"Bandlaguda(Nagaram)"},
    {value: "Bandlaguda(Nagole)", label:"Bandlaguda(Nagole)"},
    {value: "Banjara Hills", label:"Banjara Hills"},
    {value: "Bank Colony(Qutubullapur)", label:"Bank Colony(Qutubullapur)"},
    {value: "Bank Colony(saket)", label:"Bank Colony(saket)"},
    {value: "Bank Street", label:"Bank Street"},
    {value: "Bapu Ghat", label:"Bapu Ghat"},
    {value: "Bapu Nagar", label:"Bapu Nagar"},
    {value: "Bapuji Nagar(Bowenpally) Bus Stop", label:"Bapuji Nagar(Bowenpally) Bus Stop"},
    {value: "Barkas", label:"Barkas"},
    {value: "Barkatpura", label:"Barkatpura"},
    {value: "Bashamoniguda", label:"Bashamoniguda"},
    {value: "Basheerbagh", label:"Basheerbagh"},
    {value: "Bata(RP Road)", label:"Bata(RP Road)"},
    {value: "Batala Cheruvu", label:"Batala Cheruvu"},
    {value: "Batasingaram", label:"Batasingaram"},
    {value: "Bavanicly", label:"Bavanicly"},
    {value: "Bazar Ghat", label:"Bazar Ghat"},
    {value: "Beeramguda", label:"Beeramguda"},
    {value: "Beerban Bagh(Asif Nagar)", label:"Beerban Bagh(Asif Nagar)"},
    {value: "Begumpet Railway Station", label:"Begumpet Railway Station"},
    {value: "Bella colony", label:"Bella colony"},
    {value: "Bhagya Nagar Colony(Uppal)", label:"Bhagya Nagar Colony(Uppal)"},
    {value: "Bhagyalatha", label:"Bhagyalatha"},
    {value: "Bhanoor", label:"Bhanoor"},
    {value: "Bharat Nagar Colony(A S Rao Nagar) Bus Stop", label:"Bharat Nagar Colony(A S Rao Nagar) Bus Stop"},
    {value: "Bharat Nagar(Moosapet) Bus Stop", label:"Bharat Nagar(Moosapet) Bus Stop"},
    {value: "Bhavani Nagar", label:"Bhavani Nagar"},
    {value: "Bhoiguda", label:"Bhoiguda"},
    {value: "Bhola Shankar Maktha", label:"Bhola Shankar Maktha"},
    {value: "Bholakpur(Boiguda)", label:"Bholakpur(Boiguda)"},
    {value: "Bhongir Bus Stop", label:"Bhongir Bus Stop"},
    {value: "Bhudevi Nagar", label:"Bhudevi Nagar"},
    {value: "Bhupesh Guptha Colony", label:"Bhupesh Guptha Colony"},
    {value: "Bibi Cancer Hospital", label:"Bibi Cancer Hospital"},
    {value: "Bibinagar", label:"Bibinagar"},
    {value: "Bible House", label:"Bible House"},
    {value: "Birla Mandir", label:"Birla Mandir"},
    {value: "Bismillah colony", label:"Bismillah colony"},
    {value: "Bits Pilani", label:"Bits Pilani"},
    {value: "Bldg blocks", label:"Bldg blocks"},
    {value: "Blue Moon(Panjagutta)", label:"Blue Moon(Panjagutta)"},
    {value: "BoatsClub(RP Road)", label:"BoatsClub(RP Road)"},
    {value: "Boduppal", label:"Boduppal"},
    {value: "Boduppal kaman", label:"Boduppal kaman"},
    {value: "Bogaram Bus Stop", label:"Bogaram Bus Stop"},
    {value: "Bolarum Bus Station", label:"Bolarum Bus Station"},
    {value: "Bommidala", label:"Bommidala"},
    {value: "Bonthapally", label:"Bonthapally"},
    {value: "Borabanda Bus Stop", label:"Borabanda Bus Stop"},
    {value: "Botiguda", label:"Botiguda"},
    {value: "Boudha Nagar(Arts College)", label:"Boudha Nagar(Arts College)"},
    {value: "Bowrampet", label:"Bowrampet"},
    {value: "Brahmanpally", label:"Brahmanpally"},
    {value: "Brindavan Colony(H S Darga)", label:"Brindavan Colony(H S Darga)"},
    {value: "Budvel", label:"Budvel"},
    {value: "Bulkapur", label:"Bulkapur"},
    {value: "Bushrath Nagar", label:"Bushrath Nagar"},
    {value: "CBS Bus Stop", label:"CBS Bus Stop"},
    {value: "CCMB", label:"CCMB"},
    {value: "CMR College of Engineering and Technology", label:"CMR College of Engineering and Technology"},
    {value: "CRPF", label:"CRPF"},
    {value: "Cable X Road", label:"Cable X Road"},
    {value: "Canaranagar", label:"Canaranagar"},
    {value: "Center Point", label:"Center Point"},
    {value: "Central School", label:"Central School"},
    {value: "Chaderghat Bus Stop", label:"Chaderghat Bus Stop"},
    {value: "Chaitanyapuri", label:"Chaitanyapuri"},
    {value: "Chakri puram colony", label:"Chakri puram colony"},
    {value: "Champapet", label:"Champapet"},
    {value: "Chanchalguda", label:"Chanchalguda"},
    {value: "Chanda Nagar", label:"Chanda Nagar"},
    {value: "Chandkhanguda", label:"Chandkhanguda"},
    {value: "Chandragiri Nagar", label:"Chandragiri Nagar"},
    {value: "Chandrayanagutta", label:"Chandrayanagutta"},
    {value: "Chandulal Baradari", label:"Chandulal Baradari"},
    {value: "Char Kaman", label:"Char Kaman"},
    {value: "Charminar Bus Stop", label:"Charminar Bus Stop"},
    {value: "Chatrinaka Police Station", label:"Chatrinaka Police Station"},
    {value: "Chatta Bazaar", label:"Chatta Bazaar"},
    {value: "Cheededu", label:"Cheededu"},
    {value: "Chengi Cherla", label:"Chengi Cherla"},
    {value: "Cherlapally Bus Stop", label:"Cherlapally Bus Stop"},
    {value: "Cherlapally Central Jail", label:"Cherlapally Central Jail"},
    {value: "Chikatimamidi", label:"Chikatimamidi"},
    {value: "Chikkadpally", label:"Chikkadpally"},
    {value: "Chilakalguda(Gandhi Statue)", label:"Chilakalguda(Gandhi Statue)"},
    {value: "Chilkanagar Bus Stop", label:"Chilkanagar Bus Stop"},
    {value: "Chilkur Balaji Temple", label:"Chilkur Balaji Temple"},
    {value: "China kanjarla", label:"China kanjarla"},
    {value: "Chinaravulapally", label:"Chinaravulapally"},
    {value: "Chinna Cherlapally", label:"Chinna Cherlapally"},
    {value: "Chinnamangalaram", label:"Chinnamangalaram"},
    {value: "Chinnathokata", label:"Chinnathokata"},
    {value: "Chintal Basthi", label:"Chintal Basthi"},
    {value: "Chintal Bus station", label:"Chintal Bus station"},
    {value: "Chintalakunta", label:"Chintalakunta"},
    {value: "Chintalmet", label:"Chintalmet"},
    {value: "Chintapatla", label:"Chintapatla"},
    {value: "Chintulla", label:"Chintulla"},
    {value: "Chippalapally", label:"Chippalapally"},
    {value: "Chiriyala", label:"Chiriyala"},
    {value: "Chittapur", label:"Chittapur"},
    {value: "Chotuppal", label:"Chotuppal"},
    {value: "Chudi bazaar", label:"Chudi bazaar"},
    {value: "Church Bus Stop(Ramanthapur)", label:"Church Bus Stop(Ramanthapur)"},
    {value: "Church Colony", label:"Church Colony"},
    {value: "City College", label:"City College"},
    {value: "City Criminal Court", label:"City Criminal Court"},
    {value: "Clock Tower", label:"Clock Tower"},
    {value: "Cyber Gateway Bus Stop", label:"Cyber Gateway Bus Stop"},
    {value: "DBR Mills", label:"DBR Mills"},
    {value: "Dabbadaguda", label:"Dabbadaguda"},
    {value: "Dabeerpura", label:"Dabeerpura"},
    {value: "Dabilpur", label:"Dabilpur"},
    {value: "Dacharam", label:"Dacharam"},
    {value: "Dairy Form(Rajendra Nagar)", label:"Dairy Form(Rajendra Nagar)"},
    {value: "Dammaiguda(lake)", label:"Dammaiguda(lake)"},
    {value: "Danama Jhopdi Bus Stop", label:"Danama Jhopdi Bus Stop"},
    {value: "Dandumailaram", label:"Dandumailaram"},
    {value: "Darugula", label:"Darugula"},
    {value: "Darulshifa", label:"Darulshifa"},
    {value: "Darus Salam", label:"Darus Salam"},
    {value: "Dasrlapally", label:"Dasrlapally"},
    {value: "Datpally", label:"Datpally"},
    {value: "Dayanand Nagar", label:"Dayanand Nagar"},
    {value: "Dayara", label:"Dayara"},
    {value: "Deepthisree", label:"Deepthisree"},
    {value: "Defence Colony", label:"Defence Colony"},
    {value: "Deshmukhi", label:"Deshmukhi"},
    {value: "Devarayamzal", label:"Devarayamzal"},
    {value: "Dharmaram", label:"Dharmaram"},
    {value: "Dhoolpet", label:"Dhoolpet"},
    {value: "Diamond Point", label:"Diamond Point"},
    {value: "Dilsukhnagar Bus station", label:"Dilsukhnagar Bus station"},
    {value: "Domalguda", label:"Domalguda"},
    {value: "Doodh Bowli", label:"Doodh Bowli"},
    {value: "Doulatabad", label:"Doulatabad"},
    {value: "Dubai Gate", label:"Dubai Gate"},
    {value: "Dulapally", label:"Dulapally"},
    {value: "Dundigal Airbase", label:"Dundigal Airbase"},
    {value: "Dundigal X road", label:"Dundigal X road"},
    {value: "Durga Estate", label:"Durga Estate"},
    {value: "E C Nagar", label:"E C Nagar"},
    {value: "ECIL Bus Stop", label:"ECIL Bus Stop"},
    {value: "EME Centre Bus Stop", label:"EME Centre Bus Stop"},
    {value: "ESI Bus Stop", label:"ESI Bus Stop"},
    {value: "East Anand Bagh", label:"East Anand Bagh"},
    {value: "East Bahadurpura", label:"East Bahadurpura"},
    {value: "East Marredpally", label:"East Marredpally"},
    {value: "Easwaripuri", label:"Easwaripuri"},
    {value: "Edulabad Lake", label:"Edulabad Lake"},
    {value: "Electric Junction", label:"Electric Junction"},
    {value: "Elgapally Tanda", label:"Elgapally Tanda"},
    {value: "Engine bowli", label:"Engine bowli"},
    {value: "Enkiryal", label:"Enkiryal"},
    {value: "Erragadda", label:"Erragadda"},
    {value: "Erramanzil Bus Stop", label:"Erramanzil Bus Stop"},
    {value: "FCI Colony", label:"FCI Colony"},
    {value: "Fakeerguda", label:"Fakeerguda"},
    {value: "Falaknuma", label:"Falaknuma"},
    {value: "Falaknuma Railway Station", label:"Falaknuma Railway Station"},
    {value: "Family Qtrs", label:"Family Qtrs"},
    {value: "Fateh Darwaza", label:"Fateh Darwaza"},
    {value: "Fathenagar", label:"Fathenagar"},
    {value: "Ferozeguda", label:"Ferozeguda"},
    {value: "Ferzajiguda", label:"Ferzajiguda"},
    {value: "Fever Hospital", label:"Fever Hospital"},
    {value: "Film Nagar", label:"Film Nagar"},
    {value: "G Madanna Gudem", label:"G Madanna Gudem"},
    {value: "G pally", label:"G pally"},
    {value: "GHouse Nagar", label:"GHouse Nagar"},
    {value: "GPFA QTRS", label:"GPFA QTRS"},
    {value: "GPO(Abids)", label:"GPO(Abids)"},
    {value: "GPRA QTRS", label:"GPRA QTRS"},
    {value: "GTS Colony", label:"GTS Colony"},
    {value: "Gachibowli Bus Station", label:"Gachibowli Bus Station"},
    {value: "Gaddamallaiguda", label:"Gaddamallaiguda"},
    {value: "Gaganpahad", label:"Gaganpahad"},
    {value: "Gagillapur", label:"Gagillapur"},
    {value: "Gajularamaram", label:"Gajularamaram"},
    {value: "Galaxy", label:"Galaxy"},
    {value: "Gandhi Bhavan Bus Stop", label:"Gandhi Bhavan Bus Stop"},
    {value: "Gandhi Hospital", label:"Gandhi Hospital"},
    {value: "Gandhi Hospital Bus Stop", label:"Gandhi Hospital Bus Stop"},
    {value: "Gandhi Nagar Bus Stop", label:"Gandhi Nagar Bus Stop"},
    {value: "Gandhi Nagar(Kavadiguda) Bus Stop", label:"Gandhi Nagar(Kavadiguda) Bus Stop"},
    {value: "Gandhi Nagar(kapra)", label:"Gandhi Nagar(kapra)"},
    {value: "Gandhi Statue", label:"Gandhi Statue"},
    {value: "Gandi Cheruvu Bus Stop", label:"Gandi Cheruvu Bus Stop"},
    {value: "Gandi Maisamma", label:"Gandi Maisamma"},
    {value: "Gandipet", label:"Gandipet"},
    {value: "Ganesh Nagar", label:"Ganesh Nagar"},
    {value: "Ganesh Temple", label:"Ganesh Temple"},
    {value: "Ganeshpuri Colony", label:"Ganeshpuri Colony"},
    {value: "Ganga Nagar", label:"Ganga Nagar"},
    {value: "Gangaputra Colony Bus Stop", label:"Gangaputra Colony Bus Stop"},
    {value: "Gangaram", label:"Gangaram"},
    {value: "Gautam Nagar water tank", label:"Gautam Nagar water tank"},
    {value: "Gayatri Hills", label:"Gayatri Hills"},
    {value: "Gayatri Nagar", label:"Gayatri Nagar"},
    {value: "Geological Survey of india", label:"Geological Survey of india"},
    {value: "Ghanpur Bus Stop", label:"Ghanpur Bus Stop"},
    {value: "Ghatkesar Bus Stop", label:"Ghatkesar Bus Stop"},
    {value: "Ghattuppal", label:"Ghattuppal"},
    {value: "Giri Nagar", label:"Giri Nagar"},
    {value: "Girmapur", label:"Girmapur"},
    {value: "Gokhle Nagar", label:"Gokhle Nagar"},
    {value: "Golconda Hotel", label:"Golconda Hotel"},
    {value: "Golconda X Roads", label:"Golconda X Roads"},
    {value: "Golkonda Bus Stop", label:"Golkonda Bus Stop"},
    {value: "Gollapally", label:"Gollapally"},
    {value: "Golnaka", label:"Golnaka"},
    {value: "Gomaram", label:"Gomaram"},
    {value: "Gopalapuram", label:"Gopalapuram"},
    {value: "Gopularam", label:"Gopularam"},
    {value: "Gosha Mahal", label:"Gosha Mahal"},
    {value: "Gowdavalli", label:"Gowdavalli"},
    {value: "Gowliguda", label:"Gowliguda"},
    {value: "Gowlipura", label:"Gowlipura"},
    {value: "Gowrelly", label:"Gowrelly"},
    {value: "Green Field Colony", label:"Green Field Colony"},
    {value: "Greenlands", label:"Greenlands"},
    {value: "Guduru village", label:"Guduru village"},
    {value: "Guldharwaja", label:"Guldharwaja"},
    {value: "Gulshan Function Hall", label:"Gulshan Function Hall"},
    {value: "Gulshan-E-Iqbal Colony", label:"Gulshan-E-Iqbal Colony"},
    {value: "Gulzar Nagar", label:"Gulzar Nagar"},
    {value: "Gummadidala", label:"Gummadidala"},
    {value: "Gundla", label:"Gundla"},
    {value: "Gungal", label:"Gungal"},
    {value: "Gunrock", label:"Gunrock"},
    {value: "Gurramaguda", label:"Gurramaguda"},
    {value: "Gymkhana Grounds", label:"Gymkhana Grounds"},
    {value: "H.S Dargha", label:"H.S Dargha"},
    {value: "HAL Colony", label:"HAL Colony"},
    {value: "HAL Colony(Old Bowenpally)", label:"HAL Colony(Old Bowenpally)"},
    {value: "HB Colony", label:"HB Colony"},
    {value: "HB Colony Phase-1 Bus Stop", label:"HB Colony Phase-1 Bus Stop"},
    {value: "HCL Colony", label:"HCL Colony"},
    {value: "HCU", label:"HCU"},
    {value: "HCU Campus", label:"HCU Campus"},
    {value: "HMT Hills Colony", label:"HMT Hills Colony"},
    {value: "HMT colony", label:"HMT colony"},
    {value: "HPS", label:"HPS"},
    {value: "HUDA Complex", label:"HUDA Complex"},
    {value: "Habsiguda Bus Stop", label:"Habsiguda Bus Stop"},
    {value: "Hafeezpet Bus Stop", label:"Hafeezpet Bus Stop"},
    {value: "Hafiz Baba Nagar", label:"Hafiz Baba Nagar"},
    {value: "Hajipur", label:"Hajipur"},
    {value: "Hakimpet", label:"Hakimpet"},
    {value: "Hakimpet Airbase", label:"Hakimpet Airbase"},
    {value: "Hanuman Temple(A S Rao Nagar)", label:"Hanuman Temple(A S Rao Nagar)"},
    {value: "Hanuman Temple(Narsingi)", label:"Hanuman Temple(Narsingi)"},
    {value: "Hanuman Temple(Tirumulgherry)", label:"Hanuman Temple(Tirumulgherry)"},
    {value: "Hanumanpet", label:"Hanumanpet"},
    {value: "Happy home", label:"Happy home"},
    {value: "Hari Puri Colony Park", label:"Hari Puri Colony Park"},
    {value: "Harshaguda", label:"Harshaguda"},
    {value: "Hasmatpet", label:"Hasmatpet"},
    {value: "Hasnabad", label:"Hasnabad"},
    {value: "Hastinapuram", label:"Hastinapuram"},
    {value: "Hatnura", label:"Hatnura"},
    {value: "Hayath Nagar Bus Stop", label:"Hayath Nagar Bus Stop"},
    {value: "Hema Nagar", label:"Hema Nagar"},
    {value: "High Court Colony Bus Stop", label:"High Court Colony Bus Stop"},
    {value: "High Court(Post Office)", label:"High Court(Post Office)"},
    {value: "Himayat Sagar Road", label:"Himayat Sagar Road"},
    {value: "Himayath Nagar", label:"Himayath Nagar"},
    {value: "Hitech City Bus Stop", label:"Hitech City Bus Stop"},
    {value: "Hitech City MMTS Station", label:"Hitech City MMTS Station"},
    {value: "Huda Colony(Lingampalli)", label:"Huda Colony(Lingampalli)"},
    {value: "Huda colony Bus Stop", label:"Huda colony Bus Stop"},
    {value: "Hussaini Alam", label:"Hussaini Alam"},
    {value: "Hyderaguda Bus Stop", label:"Hyderaguda Bus Stop"},
    {value: "Hyderguda Bus Stop", label:"Hyderguda Bus Stop"},
    {value: "Hydernagar", label:"Hydernagar"},
    {value: "Hydershakote", label:"Hydershakote"},
    {value: "I S Sadan Complex", label:"I S Sadan Complex"},
    {value: "IDA", label:"IDA"},
    {value: "IDPL Bus Stop", label:"IDPL Bus Stop"},
    {value: "INDL Estate(Moula Ali)", label:"INDL Estate(Moula Ali)"},
    {value: "Ibrahimpatnam Bus Station", label:"Ibrahimpatnam Bus Station"},
    {value: "Indira Gruhakalph Colony", label:"Indira Gruhakalph Colony"},
    {value: "Indira Nagar", label:"Indira Nagar"},
    {value: "Indira Nagar(Subhash Nagar)", label:"Indira Nagar(Subhash Nagar)"},
    {value: "Indira Park", label:"Indira Park"},
    {value: "Indra Reddy Nagar(Sivarampalli)", label:"Indra Reddy Nagar(Sivarampalli)"},
    {value: "Indresam", label:"Indresam"},
    {value: "Industrial Estate manufacturers", label:"Industrial Estate manufacturers"},
    {value: "Injapure", label:"Injapure"},
    {value: "Isnapur-Indira Karan Rd", label:"Isnapur-Indira Karan Rd"},
    {value: "Ivy League Academy", label:"Ivy League Academy"},
    {value: "J J Nagar Colony", label:"J J Nagar Colony"},
    {value: "J P Durgah", label:"J P Durgah"},
    {value: "JBS Bus Stop", label:"JBS Bus Stop"},
    {value: "JNTU(Kukatpally) Bus Stop", label:"JNTU(Kukatpally) Bus Stop"},
    {value: "JNTU(MasabTank)", label:"JNTU(MasabTank)"},
    {value: "Jagadgiri Gutta Bus Stop", label:"Jagadgiri Gutta Bus Stop"},
    {value: "Jagapathi Hills", label:"Jagapathi Hills"},
    {value: "Jaheer Nagar", label:"Jaheer Nagar"},
    {value: "Jail Garden", label:"Jail Garden"},
    {value: "Jainapally", label:"Jainapally"},
    {value: "Jalapalli", label:"Jalapalli"},
    {value: "Jamal Colony", label:"Jamal Colony"},
    {value: "James Street", label:"James Street"},
    {value: "Jamia Osmania Bus Stop", label:"Jamia Osmania Bus Stop"},
    {value: "Jamilapet", label:"Jamilapet"},
    {value: "Jana Prakash Narayan Nagar", label:"Jana Prakash Narayan Nagar"},
    {value: "Jana Priya West City", label:"Jana Priya West City"},
    {value: "Janapriya Colony Bus Stop", label:"Janapriya Colony Bus Stop"},
    {value: "Jangampet", label:"Jangampet"},
    {value: "Japal", label:"Japal"},
    {value: "Jawahar Nagar", label:"Jawahar Nagar"},
    {value: "Jayapuri Colony", label:"Jayapuri Colony"},
    {value: "Jeedimetla Bus Stop", label:"Jeedimetla Bus Stop"},
    {value: "Jeedimetla Sub-Station", label:"Jeedimetla Sub-Station"},
    {value: "Jeedimetla(Ghatkesar)", label:"Jeedimetla(Ghatkesar)"},
    {value: "Jhothi Nagar", label:"Jhothi Nagar"},
    {value: "Jinkalwada", label:"Jinkalwada"},
    {value: "Jinnaram", label:"Jinnaram"},
    {value: "Jiyapally", label:"Jiyapally"},
    {value: "Joshi Wadi", label:"Joshi Wadi"},
    {value: "Jothi Nagar", label:"Jothi Nagar"},
    {value: "Jubilee Checkpost Bus Stop", label:"Jubilee Checkpost Bus Stop"},
    {value: "Jubilee Hills", label:"Jubilee Hills"},
    {value: "Jukal", label:"Jukal"},
    {value: "Juloor", label:"Juloor"},
    {value: "Jummerat Bazar", label:"Jummerat Bazar"},
    {value: "Jyothi Nagar Bus Station", label:"Jyothi Nagar Bus Station"},
    {value: "KK nagar", label:"KK nagar"},
    {value: "KLR Nagar", label:"KLR Nagar"},
    {value: "KPHB Colony Bus Stop", label:"KPHB Colony Bus Stop"},
    {value: "KPHB Colony MIG", label:"KPHB Colony MIG"},
    {value: "KPHB Colony Phase-1", label:"KPHB Colony Phase-1"},
    {value: "KPHB IVth phase", label:"KPHB IVth phase"},
    {value: "Kabutar Khana", label:"Kabutar Khana"},
    {value: "Kachiguda Bus Stop", label:"Kachiguda Bus Stop"},
    {value: "Kachiguda Railway Station", label:"Kachiguda Railway Station"},
    {value: "Kakatiya Nagar(Habsiguda)", label:"Kakatiya Nagar(Habsiguda)"},
    {value: "Kakatiya Nagar(Sainikpuri)", label:"Kakatiya Nagar(Sainikpuri)"},
    {value: "Kalimandir", label:"Kalimandir"},
    {value: "Kallakal", label:"Kallakal"},
    {value: "Kalpana", label:"Kalpana"},
    {value: "Kalwakurthy Bus Stop", label:"Kalwakurthy Bus Stop"},
    {value: "Kalyan Nagar", label:"Kalyan Nagar"},
    {value: "Kalyanpuri", label:"Kalyanpuri"},
    {value: "Kaman(Syed Nagar)", label:"Kaman(Syed Nagar)"},
    {value: "Kamineni Hospital", label:"Kamineni Hospital"},
    {value: "Kanakamamidi", label:"Kanakamamidi"},
    {value: "Kanapur", label:"Kanapur"},
    {value: "Kandada", label:"Kandada"},
    {value: "Kandiguda", label:"Kandiguda"},
    {value: "Kandlakoya", label:"Kandlakoya"},
    {value: "Kandukur", label:"Kandukur"},
    {value: "Kandukur X Roads", label:"Kandukur X Roads"},
    {value: "Kanukunta", label:"Kanukunta"},
    {value: "Kapol X roads", label:"Kapol X roads"},
    {value: "Kappad", label:"Kappad"},
    {value: "Kapra", label:"Kapra"},
    {value: "Karanamguda", label:"Karanamguda"},
    {value: "Kardanur", label:"Kardanur"},
    {value: "Karmanghat Bus Stop", label:"Karmanghat Bus Stop"},
    {value: "Karmika Nagar", label:"Karmika Nagar"},
    {value: "Karvan", label:"Karvan"},
    {value: "Katedan Industrial Area", label:"Katedan Industrial Area"},
    {value: "Kavadiguda", label:"Kavadiguda"},
    {value: "Kavaguda", label:"Kavaguda"},
    {value: "Kavvadipally", label:"Kavvadipally"},
    {value: "Kazipally", label:"Kazipally"},
    {value: "Keerthimahal", label:"Keerthimahal"},
    {value: "Keesara Bus Stop", label:"Keesara Bus Stop"},
    {value: "Keesara guta", label:"Keesara guta"},
    {value: "Kesaram", label:"Kesaram"},
    {value: "Kesari Hanuman Temple", label:"Kesari Hanuman Temple"},
    {value: "Kesav Giri", label:"Kesav Giri"},
    {value: "Keshavaram", label:"Keshavaram"},
    {value: "Keshavpur", label:"Keshavpur"},
    {value: "KethiReedy Pally", label:"KethiReedy Pally"},
    {value: "Khagazghat", label:"Khagazghat"},
    {value: "Khairatabad Bus Stop", label:"Khairatabad Bus Stop"},
    {value: "Khaja Guda", label:"Khaja Guda"},
    {value: "Kharkhana Bus Stop", label:"Kharkhana Bus Stop"},
    {value: "Khilwat", label:"Khilwat"},
    {value: "King Koti", label:"King Koti"},
    {value: "Kishan Bagh", label:"Kishan Bagh"},
    {value: "Kismatpura", label:"Kismatpura"},
    {value: "Kistapur", label:"Kistapur"},
    {value: "Kodakanchi", label:"Kodakanchi"},
    {value: "Koheda", label:"Koheda"},
    {value: "Koheda Village", label:"Koheda Village"},
    {value: "Kokapeta Lake", label:"Kokapeta Lake"},
    {value: "Kollapadakal", label:"Kollapadakal"},
    {value: "Kollur Bus Stop", label:"Kollur Bus Stop"},
    {value: "Kolthur", label:"Kolthur"},
    {value: "Kompally Bus Stop", label:"Kompally Bus Stop"},
    {value: "Kondakal", label:"Kondakal"},
    {value: "Kondamadugu", label:"Kondamadugu"},
    {value: "Kondapur Bus Stop", label:"Kondapur Bus Stop"},
    {value: "Kondapur(Ghatkesar)", label:"Kondapur(Ghatkesar)"},
    {value: "Kongara Kalan", label:"Kongara Kalan"},
    {value: "Korantee", label:"Korantee"},
    {value: "Korremmula", label:"Korremmula"},
    {value: "Kothaguda Bus Stop(Hitech City Rd)", label:"Kothaguda Bus Stop(Hitech City Rd)"},
    {value: "Kothagudem", label:"Kothagudem"},
    {value: "Kothapalli", label:"Kothapalli"},
    {value: "Kothapet Bus Stop", label:"Kothapet Bus Stop"},
    {value: "Kothapet(Barkas)", label:"Kothapet(Barkas)"},
    {value: "Kothewalguda", label:"Kothewalguda"},
    {value: "Kothur", label:"Kothur"},
    {value: "Koti Bus Stop", label:"Koti Bus Stop"},
    {value: "Kotla Ali Jah", label:"Kotla Ali Jah"},
    {value: "Kowkur", label:"Kowkur"},
    {value: "Kowkur X Roads", label:"Kowkur X Roads"},
    {value: "Krishna nagar", label:"Krishna nagar"},
    {value: "Krupa Complex", label:"Krupa Complex"},
    {value: "Kudaspally", label:"Kudaspally"},
    {value: "Kukatpally Bus Stop", label:"Kukatpally Bus Stop"},
    {value: "Kuntloor", label:"Kuntloor"},
    {value: "Kurmaguda", label:"Kurmaguda"},
    {value: "Kurmalguda", label:"Kurmalguda"},
    {value: "Kushaiguda", label:"Kushaiguda"},
    {value: "Kushaiguda Bus Depot", label:"Kushaiguda Bus Depot"},
    {value: "Kyasaram", label:"Kyasaram"},
    {value: "LB Nagar Bus Stop", label:"LB Nagar Bus Stop"},
    {value: "LB Stadium", label:"LB Stadium"},
    {value: "LIG Colony", label:"LIG Colony"},
    {value: "LP gudem", label:"LP gudem"},
    {value: "LV Prasad Bus Stop", label:"LV Prasad Bus Stop"},
    {value: "Lab Quarters Main Bus Stop", label:"Lab Quarters Main Bus Stop"},
    {value: "Ladies Hostel", label:"Ladies Hostel"},
    {value: "Laemuru village", label:"Laemuru village"},
    {value: "Lakdawala", label:"Lakdawala"},
    {value: "Lakdikapool Bus Stop", label:"Lakdikapool Bus Stop"},
    {value: "Lal Bazar Bus Stop", label:"Lal Bazar Bus Stop"},
    {value: "Lal Darwaza", label:"Lal Darwaza"},
    {value: "Lalaguda Bus Stop", label:"Lalaguda Bus Stop"},
    {value: "Lalapet", label:"Lalapet"},
    {value: "Lalbungalow", label:"Lalbungalow"},
    {value: "Lalitha Bagh", label:"Lalitha Bagh"},
    {value: "Langar House Bus Stop", label:"Langar House Bus Stop"},
    {value: "Latha Talkies", label:"Latha Talkies"},
    {value: "Law College", label:"Law College"},
    {value: "Laxmapur", label:"Laxmapur"},
    {value: "Laxmi Nagar(Mehdipatnam)", label:"Laxmi Nagar(Mehdipatnam)"},
    {value: "Laxmi Nagar(Sainathpuram)", label:"Laxmi Nagar(Sainathpuram)"},
    {value: "Laxmi Starch", label:"Laxmi Starch"},
    {value: "Laxmiguda", label:"Laxmiguda"},
    {value: "Laxmitanda", label:"Laxmitanda"},
    {value: "Lecturers Colony", label:"Lecturers Colony"},
    {value: "Lenin Nagar", label:"Lenin Nagar"},
    {value: "Liberty Bus Stop", label:"Liberty Bus Stop"},
    {value: "Lingampally Bus Stop", label:"Lingampally Bus Stop"},
    {value: "Lingapur", label:"Lingapur"},
    {value: "Lothkunta Bus Stop", label:"Lothkunta Bus Stop"},
    {value: "Loyapalli", label:"Loyapalli"},
    {value: "Loyola Academy", label:"Loyola Academy"},
    {value: "M M kunta", label:"M M kunta"},
    {value: "MB Darga", label:"MB Darga"},
    {value: "MC Pally", label:"MC Pally"},
    {value: "MD Lines", label:"MD Lines"},
    {value: "MG Nagar", label:"MG Nagar"},
    {value: "MGBS Bus Stop", label:"MGBS Bus Stop"},
    {value: "MLA Colony Bus Stop", label:"MLA Colony Bus Stop"},
    {value: "MRO office", label:"MRO office"},
    {value: "Madapati Hanumantha School", label:"Madapati Hanumantha School"},
    {value: "Madaram", label:"Madaram"},
    {value: "Madhapur Bus Stop", label:"Madhapur Bus Stop"},
    {value: "Madhuban colony", label:"Madhuban colony"},
    {value: "Madhura Nagar Colony", label:"Madhura Nagar Colony"},
    {value: "Madina Market", label:"Madina Market"},
    {value: "Mahaboob College", label:"Mahaboob College"},
    {value: "Mahavir Hospital", label:"Mahavir Hospital"},
    {value: "Mahesh Nagar", label:"Mahesh Nagar"},
    {value: "Maheshwaram", label:"Maheshwaram"},
    {value: "Majeedpur", label:"Majeedpur"},
    {value: "Makki Darwaja", label:"Makki Darwaja"},
    {value: "Malagudem", label:"Malagudem"},
    {value: "Malakpet", label:"Malakpet"},
    {value: "Malasia Township", label:"Malasia Township"},
    {value: "Malkajgiri Bus Stop", label:"Malkajgiri Bus Stop"},
    {value: "Malkapur", label:"Malkapur"},
    {value: "Malkaram Bus Stop", label:"Malkaram Bus Stop"},
    {value: "Mall", label:"Mall"},
    {value: "Malla Reddy Engineering College", label:"Malla Reddy Engineering College"},
    {value: "Mallampet", label:"Mallampet"},
    {value: "Mallapally Mask", label:"Mallapally Mask"},
    {value: "Mallapur(Annapurna Colony)", label:"Mallapur(Annapurna Colony)"},
    {value: "Mallapur(shamshabad)", label:"Mallapur(shamshabad)"},
    {value: "Mallepally", label:"Mallepally"},
    {value: "Mallikharjun Nagar", label:"Mallikharjun Nagar"},
    {value: "Mamidipally", label:"Mamidipally"},
    {value: "Manchal", label:"Manchal"},
    {value: "Mandal Office (Patancheru)", label:"Mandal Office (Patancheru)"},
    {value: "Mangalghat", label:"Mangalghat"},
    {value: "Mangalpally", label:"Mangalpally"},
    {value: "Manikonda Quaters Bus Stop", label:"Manikonda Quaters Bus Stop"},
    {value: "Manikyamma Colony", label:"Manikyamma Colony"},
    {value: "Mannyaguda", label:"Mannyaguda"},
    {value: "Mansoorabad", label:"Mansoorabad"},
    {value: "Manyaguda", label:"Manyaguda"},
    {value: "Marriguda", label:"Marriguda"},
    {value: "Marripally", label:"Marripally"},
    {value: "Maruthi Nagar(A S Rao Nagar)", label:"Maruthi Nagar(A S Rao Nagar)"},
    {value: "Maruthi Nagar(Kothapet)", label:"Maruthi Nagar(Kothapet)"},
    {value: "Masab Tank Bus Stop", label:"Masab Tank Bus Stop"},
    {value: "Medchal", label:"Medchal"},
    {value: "Medipally", label:"Medipally"},
    {value: "Meerkhanpet", label:"Meerkhanpet"},
    {value: "Meerpet", label:"Meerpet"},
    {value: "Mehdipatnam Bus Stop", label:"Mehdipatnam Bus Stop"},
    {value: "Mekaguda", label:"Mekaguda"},
    {value: "Mess", label:"Mess"},
    {value: "Mettuguda Bus Stop", label:"Mettuguda Bus Stop"},
    {value: "Midhani", label:"Midhani"},
    {value: "Milan", label:"Milan"},
    {value: "Military Canteen(AOC)", label:"Military Canteen(AOC)"},
    {value: "Military Dairy Farm", label:"Military Dairy Farm"},
    {value: "Mindspace", label:"Mindspace"},
    {value: "Mirzalguda", label:"Mirzalguda"},
    {value: "Misri Gunj", label:"Misri Gunj"},
    {value: "Miyapur Bus Stop", label:"Miyapur Bus Stop"},
    {value: "Miyapur X Roads", label:"Miyapur X Roads"},
    {value: "Moghalpura", label:"Moghalpura"},
    {value: "Mohan Nagar", label:"Mohan Nagar"},
    {value: "Moinabad", label:"Moinabad"},
    {value: "Mokilla", label:"Mokilla"},
    {value: "Mondigowrelly", label:"Mondigowrelly"},
    {value: "Moosapet Bus Stop", label:"Moosapet Bus Stop"},
    {value: "Mosarambagh", label:"Mosarambagh"},
    {value: "Mothukulapalli", label:"Mothukulapalli"},
    {value: "Moti Darwaza", label:"Moti Darwaza"},
    {value: "Moti Nagar", label:"Moti Nagar"},
    {value: "Moula Ali", label:"Moula Ali"},
    {value: "Mozamjahi Market", label:"Mozamjahi Market"},
    {value: "Muchintala", label:"Muchintala"},
    {value: "Mudfort", label:"Mudfort"},
    {value: "Mudwin", label:"Mudwin"},
    {value: "Muknur", label:"Muknur"},
    {value: "Musheerabad Bus Stop", label:"Musheerabad Bus Stop"},
    {value: "Mustafa Nagar", label:"Mustafa Nagar"},
    {value: "Muthangi", label:"Muthangi"},
    {value: "Mysamma", label:"Mysamma"},
    {value: "Mysireddypalli", label:"Mysireddypalli"},
    {value: "Mytrivanam", label:"Mytrivanam"},
    {value: "NAARM", label:"NAARM"},
    {value: "NBT Nagar(Banjara Hills)", label:"NBT Nagar(Banjara Hills)"},
    {value: "NCC", label:"NCC"},
    {value: "NFC Nagar", label:"NFC Nagar"},
    {value: "NFC(ECIL)", label:"NFC(ECIL)"},
    {value: "NGOs Colony Bus Stop", label:"NGOs Colony Bus Stop"},
    {value: "NGRI", label:"NGRI"},
    {value: "NGRI 1st Gate", label:"NGRI 1st Gate"},
    {value: "NIMS (Nizam Hospital)", label:"NIMS (Nizam Hospital)"},
    {value: "NMDC Bus Stop", label:"NMDC Bus Stop"},
    {value: "NMDC(Moula Ali)", label:"NMDC(Moula Ali)"},
    {value: "NPPTI", label:"NPPTI"},
    {value: "NRM College", label:"NRM College"},
    {value: "NTR Gardens", label:"NTR Gardens"},
    {value: "NTR Nagar(L B Nagar)", label:"NTR Nagar(L B Nagar)"},
    {value: "NTR Stadium Bus Stop", label:"NTR Stadium Bus Stop"},
    {value: "Nacharam", label:"Nacharam"},
    {value: "Nacharam Industrial Area", label:"Nacharam Industrial Area"},
    {value: "Nadargul", label:"Nadargul"},
    {value: "Nag Mandir", label:"Nag Mandir"},
    {value: "Nagaram Bus Stop", label:"Nagaram Bus Stop"},
    {value: "Nagaram(Shamshabad)", label:"Nagaram(Shamshabad)"},
    {value: "Nagarjun nagar colony", label:"Nagarjun nagar colony"},
    {value: "Nagarjuna Sagar Road", label:"Nagarjuna Sagar Road"},
    {value: "Nagireddy Palli", label:"Nagireddy Palli"},
    {value: "Nagole Bus Stop", label:"Nagole Bus Stop"},
    {value: "Nagulapally", label:"Nagulapally"},
    {value: "Nagulur", label:"Nagulur"},
    {value: "Nainampally", label:"Nainampally"},
    {value: "Nakkalapally", label:"Nakkalapally"},
    {value: "Nalagandla", label:"Nalagandla"},
    {value: "Nalgonda X Roads Bus Stop", label:"Nalgonda X Roads Bus Stop"},
    {value: "Nallakunta Bus Stop", label:"Nallakunta Bus Stop"},
    {value: "Namala Gundu", label:"Namala Gundu"},
    {value: "Nampally", label:"Nampally"},
    {value: "Nanajipur", label:"Nanajipur"},
    {value: "Nanaknagar", label:"Nanaknagar"},
    {value: "Nanakramguda", label:"Nanakramguda"},
    {value: "Nanalnagar Bus Stop", label:"Nanalnagar Bus Stop"},
    {value: "Nandi Musalai Guda", label:"Nandi Musalai Guda"},
    {value: "Nandi Nagar Bus Stop", label:"Nandi Nagar Bus Stop"},
    {value: "Nandigama", label:"Nandigama"},
    {value: "Narapally", label:"Narapally"},
    {value: "Narayanguda", label:"Narayanguda"},
    {value: "Narayanpur", label:"Narayanpur"},
    {value: "Narsapur", label:"Narsapur"},
    {value: "Narsingi Bus Stop", label:"Narsingi Bus Stop"},
    {value: "Narsingi Lake", label:"Narsingi Lake"},
    {value: "Nawab Saheb Kunta", label:"Nawab Saheb Kunta"},
    {value: "Necklace Rd", label:"Necklace Rd"},
    {value: "Neknampur", label:"Neknampur"},
    {value: "Nemuragomla", label:"Nemuragomla"},
    {value: "Neredemet PS", label:"Neredemet PS"},
    {value: "Neredmet Old Police Station", label:"Neredmet Old Police Station"},
    {value: "Neredmet X Road Bus Stop", label:"Neredmet X Road Bus Stop"},
    {value: "Nerrapally", label:"Nerrapally"},
    {value: "New Bowenpally Bus Stop", label:"New Bowenpally Bus Stop"},
    {value: "New Bridge", label:"New Bridge"},
    {value: "New Gayathri Nagar Colony Bus Stop", label:"New Gayathri Nagar Colony Bus Stop"},
    {value: "New Maruthi Nagar", label:"New Maruthi Nagar"},
    {value: "New Science College", label:"New Science College"},
    {value: "Nirmal nagar Bus Stop", label:"Nirmal nagar Bus Stop"},
    {value: "Nizam College", label:"Nizam College"},
    {value: "Nizampet", label:"Nizampet"},
    {value: "Nizampet X Roads", label:"Nizampet X Roads"},
    {value: "North Kamalanagar", label:"North Kamalanagar"},
    {value: "Nutankal", label:"Nutankal"},
    {value: "O.U. Colony Bus Stop", label:"O.U. Colony Bus Stop"},
    {value: "OU Engineering College", label:"OU Engineering College"},
    {value: "Ocean Park(Water Park)", label:"Ocean Park(Water Park)"},
    {value: "Old Alwal(IG Statue) Bus Stop", label:"Old Alwal(IG Statue) Bus Stop"},
    {value: "Old Bowenpally Bus Stop", label:"Old Bowenpally Bus Stop"},
    {value: "Old Dairy Form", label:"Old Dairy Form"},
    {value: "Old MLA Qtrs", label:"Old MLA Qtrs"},
    {value: "Old Safilguda", label:"Old Safilguda"},
    {value: "Ootla", label:"Ootla"},
    {value: "Ordnance Factory", label:"Ordnance Factory"},
    {value: "Osman sagar Road", label:"Osman sagar Road"},
    {value: "Osmangunj", label:"Osmangunj"},
    {value: "Osmania Hospital(OGH)", label:"Osmania Hospital(OGH)"},
    {value: "Osmania Medical College", label:"Osmania Medical College"},
    {value: "Osmania University(campus)", label:"Osmania University(campus)"},
    {value: "Osmanpura Colony", label:"Osmanpura Colony"},
    {value: "P C tanda", label:"P C tanda"},
    {value: "P and T Colony", label:"P and T Colony"},
    {value: "Padmalaya Studio", label:"Padmalaya Studio"},
    {value: "Padmarao Nagar", label:"Padmarao Nagar"},
    {value: "Padmashali Colony", label:"Padmashali Colony"},
    {value: "Pahadi Shareef", label:"Pahadi Shareef"},
    {value: "Panama Godown", label:"Panama Godown"},
    {value: "Panduranga Nagar", label:"Panduranga Nagar"},
    {value: "Panjagutta Bus Stop", label:"Panjagutta Bus Stop"},
    {value: "Panyal/Konyal", label:"Panyal/Konyal"},
    {value: "Papi Reddy Nagar", label:"Papi Reddy Nagar"},
    {value: "Paradise Bus Stop", label:"Paradise Bus Stop"},
    {value: "Parsigutta", label:"Parsigutta"},
    {value: "Parwathapur", label:"Parwathapur"},
    {value: "Pasumamula", label:"Pasumamula"},
    {value: "Patancheru Bus Stop", label:"Patancheru Bus Stop"},
    {value: "Patel Nagar(Amberpet)", label:"Patel Nagar(Amberpet)"},
    {value: "Patel Nagar(Gowlipura)", label:"Patel Nagar(Gowlipura)"},
    {value: "Patelguda", label:"Patelguda"},
    {value: "Pathar Gatti", label:"Pathar Gatti"},
    {value: "Patigadda Bus Stop", label:"Patigadda Bus Stop"},
    {value: "Peddamangalaram", label:"Peddamangalaram"},
    {value: "Peddamma Gudi", label:"Peddamma Gudi"},
    {value: "Peddatundla", label:"Peddatundla"},
    {value: "Pension Office(Masabtank) Bus Stop", label:"Pension Office(Masabtank) Bus Stop"},
    {value: "Phisalbanda", label:"Phisalbanda"},
    {value: "Phool Bagh", label:"Phool Bagh"},
    {value: "Piglipuram", label:"Piglipuram"},
    {value: "Pillaipalli", label:"Pillaipalli"},
    {value: "Pochampally", label:"Pochampally"},
    {value: "Pocharam Village Main Rd", label:"Pocharam Village Main Rd"},
    {value: "Police Lines-Begumpet Bus Stop", label:"Police Lines-Begumpet Bus Stop"},
    {value: "Police Station(Malkajgiri)", label:"Police Station(Malkajgiri)"},
    {value: "Ponnala Satyanarayana and Sons", label:"Ponnala Satyanarayana and Sons"},
    {value: "Porandla", label:"Porandla"},
    {value: "PostOffice (HimyatNagar)", label:"PostOffice (HimyatNagar)"},
    {value: "Pragathi Nagar Bus Stop", label:"Pragathi Nagar Bus Stop"},
    {value: "Prajay Sai Gardens", label:"Prajay Sai Gardens"},
    {value: "Prakash Nagar Bus Stop", label:"Prakash Nagar Bus Stop"},
    {value: "Prasanth Nagar(Moula Ali)", label:"Prasanth Nagar(Moula Ali)"},
    {value: "Prashanthi Nagar", label:"Prashanthi Nagar"},
    {value: "Pratapsingaram", label:"Pratapsingaram"},
    {value: "Press(Saidabad)", label:"Press(Saidabad)"},
    {value: "Public Gardens(Nampally)", label:"Public Gardens(Nampally)"},
    {value: "Pudur", label:"Pudur"},
    {value: "Puppalaguda", label:"Puppalaguda"},
    {value: "Puranapool Bus Stop", label:"Puranapool Bus Stop"},
    {value: "Putlibowli", label:"Putlibowli"},
    {value: "Qazipura", label:"Qazipura"},
    {value: "Quba Colony", label:"Quba Colony"},
    {value: "Qutub Shahi Tombs(Tolichowki)", label:"Qutub Shahi Tombs(Tolichowki)"},
    {value: "Qutubullapur", label:"Qutubullapur"},
    {value: "R C Puram Mandal Office", label:"R C Puram Mandal Office"},
    {value: "R.K.Nagar", label:"R.K.Nagar"},
    {value: "RBT", label:"RBT"},
    {value: "RN Reddy Colony", label:"RN Reddy Colony"},
    {value: "RP Road", label:"RP Road"},
    {value: "RPF", label:"RPF"},
    {value: "RSI Club", label:"RSI Club"},
    {value: "RTC Colony (Ramanthapur)", label:"RTC Colony (Ramanthapur)"},
    {value: "RTC Colony(Hayathnagar) Bus Stop", label:"RTC Colony(Hayathnagar) Bus Stop"},
    {value: "RTC Colony(Moula ali)", label:"RTC Colony(Moula ali)"},
    {value: "RTC Colony(Subash nagar)", label:"RTC Colony(Subash nagar)"},
    {value: "RTC Cross Rd", label:"RTC Cross Rd"},
    {value: "Race Course", label:"Race Course"},
    {value: "Rachalooru", label:"Rachalooru"},
    {value: "Radhika Theatre", label:"Radhika Theatre"},
    {value: "Rahmath Nagar Bus Stop", label:"Rahmath Nagar Bus Stop"},
    {value: "Raidurgam", label:"Raidurgam"},
    {value: "Rail Nilayam", label:"Rail Nilayam"},
    {value: "Railapur", label:"Railapur"},
    {value: "Railway Crossing", label:"Railway Crossing"},
    {value: "Railway Degree College", label:"Railway Degree College"},
    {value: "Railway Quarters Moulali", label:"Railway Quarters Moulali"},
    {value: "Raj Bhavan", label:"Raj Bhavan"},
    {value: "Raja Delux", label:"Raja Delux"},
    {value: "Rajanna Bai", label:"Rajanna Bai"},
    {value: "Rajeev Nagar", label:"Rajeev Nagar"},
    {value: "Rajendra Nagar Bus Depot Bus Stop", label:"Rajendra Nagar Bus Depot Bus Stop"},
    {value: "Rajiv Gandhi International Airport(Shamshabad)", label:"Rajiv Gandhi International Airport(Shamshabad)"},
    {value: "Rajiv Gruhakalpa Colony", label:"Rajiv Gruhakalpa Colony"},
    {value: "Rajpal Nagar", label:"Rajpal Nagar"},
    {value: "Raju Colony(Ferozeguda)", label:"Raju Colony(Ferozeguda)"},
    {value: "Ram Koti", label:"Ram Koti"},
    {value: "Ram Lingampally", label:"Ram Lingampally"},
    {value: "Ram Nagar", label:"Ram Nagar"},
    {value: "Ram Nagar Gundu", label:"Ram Nagar Gundu"},
    {value: "Ram Theater", label:"Ram Theater"},
    {value: "RamaKrishna", label:"RamaKrishna"},
    {value: "Ramakrishna Puram Railway Station", label:"Ramakrishna Puram Railway Station"},
    {value: "Ramakrishnapuram X Roads(AOC)", label:"Ramakrishnapuram X Roads(AOC)"},
    {value: "Ramakrishnapuram(Kothapet)", label:"Ramakrishnapuram(Kothapet)"},
    {value: "Ramanthapur colony Bus Stop", label:"Ramanthapur colony Bus Stop"},
    {value: "Ramdaspally", label:"Ramdaspally"},
    {value: "Ramdev Guda", label:"Ramdev Guda"},
    {value: "Ramnas Pura", label:"Ramnas Pura"},
    {value: "Ramoji Film City", label:"Ramoji Film City"},
    {value: "Rampally X Roads", label:"Rampally X Roads"},
    {value: "Ranga reddy nagar", label:"Ranga reddy nagar"},
    {value: "Ranganaguda", label:"Ranganaguda"},
    {value: "Ranganatha Nagar", label:"Ranganatha Nagar"},
    {value: "Rangapur", label:"Rangapur"},
    {value: "Ranigunj Bus Stop", label:"Ranigunj Bus Stop"},
    {value: "Ravalkol thanda", label:"Ravalkol thanda"},
    {value: "Raviryal", label:"Raviryal"},
    {value: "Reddy College", label:"Reddy College"},
    {value: "Reddy Gudem", label:"Reddy Gudem"},
    {value: "Rethibowli", label:"Rethibowli"},
    {value: "Revenue Board Colony", label:"Revenue Board Colony"},
    {value: "Rhodamisri Nagar", label:"Rhodamisri Nagar"},
    {value: "Rice Mill(Shamshabad)", label:"Rice Mill(Shamshabad)"},
    {value: "Risala Bazar", label:"Risala Bazar"},
    {value: "Riyasat Nagar", label:"Riyasat Nagar"},
    {value: "Rly Bridge", label:"Rly Bridge"},
    {value: "Road No 1", label:"Road No 1"},
    {value: "Road no 2", label:"Road no 2"},
    {value: "Road no 7", label:"Road no 7"},
    {value: "Rythu Bazar(Alwal)", label:"Rythu Bazar(Alwal)"},
    {value: "S P Nagar", label:"S P Nagar"},
    {value: "S R Nagar", label:"S R Nagar"},
    {value: "SBI Colony(Kothapet)", label:"SBI Colony(Kothapet)"},
    {value: "SIFCO", label:"SIFCO"},
    {value: "Safilguda Bus Stop", label:"Safilguda Bus Stop"},
    {value: "Sagar Housing Complex", label:"Sagar Housing Complex"},
    {value: "Sahara Bus Stop", label:"Sahara Bus Stop"},
    {value: "Saheb Nagar(Vanasthalipuram)", label:"Saheb Nagar(Vanasthalipuram)"},
    {value: "Sai Nagar Colony(Balapur)", label:"Sai Nagar Colony(Balapur)"},
    {value: "Sai Nagar(Bala Nagar)", label:"Sai Nagar(Bala Nagar)"},
    {value: "Sai Nagar(kapra)", label:"Sai Nagar(kapra)"},
    {value: "Sai Ram Nagar(Langar House)", label:"Sai Ram Nagar(Langar House)"},
    {value: "Sai Ram Theatre", label:"Sai Ram Theatre"},
    {value: "Sai baba Temple(A S Rao Nagar)", label:"Sai baba Temple(A S Rao Nagar)"},
    {value: "Saibaba Nagar(Jeedimetla)", label:"Saibaba Nagar(Jeedimetla)"},
    {value: "Saidabad Bus Stop", label:"Saidabad Bus Stop"},
    {value: "Sainathpuram Bus Stop", label:"Sainathpuram Bus Stop"},
    {value: "Saipuri Colony", label:"Saipuri Colony"},
    {value: "Saireaddyguda Bus Stop", label:"Saireaddyguda Bus Stop"},
    {value: "Saket(Kapra)", label:"Saket(Kapra)"},
    {value: "Salar jung Museum(Darulshifa)", label:"Salar jung Museum(Darulshifa)"},
    {value: "Salarjung Colony", label:"Salarjung Colony"},
    {value: "Saleem Nagar", label:"Saleem Nagar"},
    {value: "Saleheen Colony", label:"Saleheen Colony"},
    {value: "Sampoorna Theater", label:"Sampoorna Theater"},
    {value: "Sanath Nagar Bus Stop", label:"Sanath Nagar Bus Stop"},
    {value: "Sangeeth", label:"Sangeeth"},
    {value: "Sanghi Nagar", label:"Sanghi Nagar"},
    {value: "Sanikpuri Bus Stop", label:"Sanikpuri Bus Stop"},
    {value: "Santhosh Nagar Bus Stand", label:"Santhosh Nagar Bus Stand"},
    {value: "Santoshi Matha Colony", label:"Santoshi Matha Colony"},
    {value: "Sapthagiri Theate", label:"Sapthagiri Theate"},
    {value: "Sapthagiri Theater", label:"Sapthagiri Theater"},
    {value: "Sarikonda", label:"Sarikonda"},
    {value: "Sarojini Bus Stop", label:"Sarojini Bus Stop"},
    {value: "Saroor Nagar Bus Terminal", label:"Saroor Nagar Bus Terminal"},
    {value: "Sastripuram Colony", label:"Sastripuram Colony"},
    {value: "Satharai", label:"Satharai"},
    {value: "Sathyanarayana Colony", label:"Sathyanarayana Colony"},
    {value: "Sathyasai school", label:"Sathyasai school"},
    {value: "Satyanagar Bus Stop", label:"Satyanagar Bus Stop"},
    {value: "Secretariat Bus Stop", label:"Secretariat Bus Stop"},
    {value: "Secunderabad Junction", label:"Secunderabad Junction"},
    {value: "Shah ali banda New Bus Stop", label:"Shah ali banda New Bus Stop"},
    {value: "Shaheen Nagar Bus Stop", label:"Shaheen Nagar Bus Stop"},
    {value: "Shaikpet Darga Bus Stop", label:"Shaikpet Darga Bus Stop"},
    {value: "Shaikpet Nala", label:"Shaikpet Nala"},
    {value: "Shakti Sai Nagar(Mallapur)", label:"Shakti Sai Nagar(Mallapur)"},
    {value: "Shama", label:"Shama"},
    {value: "Shamirpet", label:"Shamirpet"},
    {value: "Shamshabad Bus Stop", label:"Shamshabad Bus Stop"},
    {value: "Shamshiguda", label:"Shamshiguda"},
    {value: "Shankar Mutt", label:"Shankar Mutt"},
    {value: "Shankerpally", label:"Shankerpally"},
    {value: "Shanti Nagar(Lalapet)", label:"Shanti Nagar(Lalapet)"},
    {value: "Shanti Nagar(Vanasthalipuram)", label:"Shanti Nagar(Vanasthalipuram)"},
    {value: "Shapur Nagar Bus Stop", label:"Shapur Nagar Bus Stop"},
    {value: "Sharada Nagar Bus Stop", label:"Sharada Nagar Bus Stop"},
    {value: "Sharada(officers colony)", label:"Sharada(officers colony)"},
    {value: "Sheeshamahal", label:"Sheeshamahal"},
    {value: "Shenoy Nursing home", label:"Shenoy Nursing home"},
    {value: "Sheriguda", label:"Sheriguda"},
    {value: "Sherlingampally", label:"Sherlingampally"},
    {value: "Shilparamam parking(hitech city)", label:"Shilparamam parking(hitech city)"},
    {value: "Shivam", label:"Shivam"},
    {value: "Shivanagar", label:"Shivanagar"},
    {value: "Shivannaguda", label:"Shivannaguda"},
    {value: "Shobana", label:"Shobana"},
    {value: "Shoppers Stop", label:"Shoppers Stop"},
    {value: "Shopping Centre(Sainikpuri)", label:"Shopping Centre(Sainikpuri)"},
    {value: "Shyamlal Building", label:"Shyamlal Building"},
    {value: "Siddapur", label:"Siddapur"},
    {value: "Sikh Village Rd", label:"Sikh Village Rd"},
    {value: "Sikindlapur", label:"Sikindlapur"},
    {value: "Singaram", label:"Singaram"},
    {value: "Sita homes Colony", label:"Sita homes Colony"},
    {value: "Sitafalmandi MMTS", label:"Sitafalmandi MMTS"},
    {value: "Sitaram Bagh Bus Stop", label:"Sitaram Bagh Bus Stop"},
    {value: "Sithamrai", label:"Sithamrai"},
    {value: "Sivaji Colony", label:"Sivaji Colony"},
    {value: "Sivarampalli", label:"Sivarampalli"},
    {value: "Skandagiri", label:"Skandagiri"},
    {value: "Snehapuri Colony Bus Stop", label:"Snehapuri Colony Bus Stop"},
    {value: "Sohail Hotel", label:"Sohail Hotel"},
    {value: "Solipet", label:"Solipet"},
    {value: "Somajiguda", label:"Somajiguda"},
    {value: "Somaram", label:"Somaram"},
    {value: "South End Park", label:"South End Park"},
    {value: "South Kamalanagar", label:"South Kamalanagar"},
    {value: "Sri Nagar colony", label:"Sri Nagar colony"},
    {value: "Sri Ram Nagar Colony(kapra)", label:"Sri Ram Nagar Colony(kapra)"},
    {value: "Sri Ram Nagar(Chintal)", label:"Sri Ram Nagar(Chintal)"},
    {value: "Sri Sai Nagar Lake", label:"Sri Sai Nagar Lake"},
    {value: "Sri Venkateshwara Colony", label:"Sri Venkateshwara Colony"},
    {value: "Sridevi Nursing home", label:"Sridevi Nursing home"},
    {value: "Srinivas Nagar Bus Stop", label:"Srinivas Nagar Bus Stop"},
    {value: "Sripuram Colony Stop", label:"Sripuram Colony Stop"},
    {value: "Sriramana Colony", label:"Sriramana Colony"},
    {value: "Srirangavaram", label:"Srirangavaram"},
    {value: "State Archieves", label:"State Archieves"},
    {value: "State home", label:"State home"},
    {value: "Street no 8 Bus Stop", label:"Street no 8 Bus Stop"},
    {value: "Subhadra Nagar(Vanasthalipuram)", label:"Subhadra Nagar(Vanasthalipuram)"},
    {value: "Subhash Nagar(Alwal)", label:"Subhash Nagar(Alwal)"},
    {value: "Subhash Nagar(Jeedimetla)", label:"Subhash Nagar(Jeedimetla)"},
    {value: "Suchitra Bus Stop", label:"Suchitra Bus Stop"},
    {value: "Sudha Nagar Colony", label:"Sudha Nagar Colony"},
    {value: "Sultan Ali Bagh", label:"Sultan Ali Bagh"},
    {value: "Sultan Bazar", label:"Sultan Bazar"},
    {value: "Sultanpally", label:"Sultanpally"},
    {value: "Sumithra Nagar", label:"Sumithra Nagar"},
    {value: "Suncity", label:"Suncity"},
    {value: "Super Bazar", label:"Super Bazar"},
    {value: "Suraram", label:"Suraram"},
    {value: "Suraram X Road", label:"Suraram X Road"},
    {value: "Suresh Talkies", label:"Suresh Talkies"},
    {value: "Survey Of india", label:"Survey Of india"},
    {value: "Surya Nagar(Alwal)", label:"Surya Nagar(Alwal)"},
    {value: "Sushma Theater", label:"Sushma Theater"},
    {value: "Sutariguda", label:"Sutariguda"},
    {value: "Swaraj Nagar", label:"Swaraj Nagar"},
    {value: "Syed Aliguda", label:"Syed Aliguda"},
    {value: "Syed Nagar", label:"Syed Nagar"},
    {value: "Syndicate Bank(Shivam)", label:"Syndicate Bank(Shivam)"},
    {value: "TV Studio", label:"TV Studio"},
    {value: "Tad Bun", label:"Tad Bun"},
    {value: "Tadbund Bus Stop", label:"Tadbund Bus Stop"},
    {value: "Tadipatri", label:"Tadipatri"},
    {value: "Talab Katta", label:"Talab Katta"},
    {value: "Tallagada", label:"Tallagada"},
    {value: "TankBund", label:"TankBund"},
    {value: "Tarnaka Bus Stop", label:"Tarnaka Bus Stop"},
    {value: "Teegala Kunta", label:"Teegala Kunta"},
    {value: "Tejaswi Nagar", label:"Tejaswi Nagar"},
    {value: "Telecom Nagar", label:"Telecom Nagar"},
    {value: "Telephone Bhavan", label:"Telephone Bhavan"},
    {value: "Telephone Colony(Kothapet)", label:"Telephone Colony(Kothapet)"},
    {value: "Tellapur", label:"Tellapur"},
    {value: "Temple Alwal", label:"Temple Alwal"},
    {value: "Tenugudem", label:"Tenugudem"},
    {value: "Tharamatipet", label:"Tharamatipet"},
    {value: "Thatti Annaram", label:"Thatti Annaram"},
    {value: "Thilak Nagar", label:"Thilak Nagar"},
    {value: "Thorrur", label:"Thorrur"},
    {value: "Thumkunta", label:"Thumkunta"},
    {value: "Thurakapalli", label:"Thurakapalli"},
    {value: "Tilaknaar", label:"Tilaknaar"},
    {value: "Timmapally Bus Stop", label:"Timmapally Bus Stop"},
    {value: "Timmapur", label:"Timmapur"},
    {value: "Tipaiguda", label:"Tipaiguda"},
    {value: "Tirumalgherry", label:"Tirumalgherry"},
    {value: "Tolichowki Bus Stop", label:"Tolichowki Bus Stop"},
    {value: "Tourist", label:"Tourist"},
    {value: "Tukaram Gate", label:"Tukaram Gate"},
    {value: "Tukkuguda", label:"Tukkuguda"},
    {value: "Tummalur", label:"Tummalur"},
    {value: "Tv Tower", label:"Tv Tower"},
    {value: "USB X Road", label:"USB X Road"},
    {value: "Uday Nagar", label:"Uday Nagar"},
    {value: "Uddamarri", label:"Uddamarri"},
    {value: "Udyog Nagar", label:"Udyog Nagar"},
    {value: "Uppal Bus Stop", label:"Uppal Bus Stop"},
    {value: "Uppal Depot", label:"Uppal Depot"},
    {value: "Uppal X Road Bus Stop", label:"Uppal X Road Bus Stop"},
    {value: "Upparpally X Road", label:"Upparpally X Road"},
    {value: "Upperguda", label:"Upperguda"},
    {value: "Upperpally(Hakimpet)", label:"Upperpally(Hakimpet)"},
    {value: "Uppuguda", label:"Uppuguda"},
    {value: "Urdu Hall", label:"Urdu Hall"},
    {value: "V.V.Nagar bustop", label:"V.V.Nagar bustop"},
    {value: "VBIT(Ascendas IT Park)", label:"VBIT(Ascendas IT Park)"},
    {value: "VST Bus Stop", label:"VST Bus Stop"},
    {value: "Vadigapally", label:"Vadigapally"},
    {value: "Vampuguda", label:"Vampuguda"},
    {value: "Vanasthalipuram", label:"Vanasthalipuram"},
    {value: "Vani Nagar", label:"Vani Nagar"},
    {value: "Vasanth Nagar Bus Stop", label:"Vasanth Nagar Bus Stop"},
    {value: "Vasavi Nagar", label:"Vasavi Nagar"},
    {value: "Vattipally", label:"Vattipally"},
    {value: "Vavilala", label:"Vavilala"},
    {value: "Vayas nagar", label:"Vayas nagar"},
    {value: "Vayupuri", label:"Vayupuri"},
    {value: "Veldurthi", label:"Veldurthi"},
    {value: "Velemela", label:"Velemela"},
    {value: "Vengal Rao Nagar", label:"Vengal Rao Nagar"},
    {value: "Venkata Reddy Nagar Bus Stop", label:"Venkata Reddy Nagar Bus Stop"},
    {value: "Venkatagiri", label:"Venkatagiri"},
    {value: "Venkatapur Bus Stop", label:"Venkatapur Bus Stop"},
    {value: "Venkatapuram Last Bus Stop", label:"Venkatapuram Last Bus Stop"},
    {value: "Venkateswara Colony(Hasthinapuram)", label:"Venkateswara Colony(Hasthinapuram)"},
    {value: "Victory Play ground", label:"Victory Play ground"},
    {value: "Vidya Nagar Bus Stop", label:"Vidya Nagar Bus Stop"},
    {value: "Vijaya Hospital", label:"Vijaya Hospital"},
    {value: "Vijaya Nagar Colony Bus Stop(New Mallepally)", label:"Vijaya Nagar Colony Bus Stop(New Mallepally)"},
    {value: "Vinayak Nagar", label:"Vinayak Nagar"},
    {value: "Vittal Rao Nagar", label:"Vittal Rao Nagar"},
    {value: "Vittal Wadi Bus Stop", label:"Vittal Wadi Bus Stop"},
    {value: "Vivek Nagar", label:"Vivek Nagar"},
    {value: "Vivekananda Nagar(Dilsukh Nagar)", label:"Vivekananda Nagar(Dilsukh Nagar)"},
    {value: "Warasiguda Bus Stop", label:"Warasiguda Bus Stop"},
    {value: "Water Tank(Boduppal)", label:"Water Tank(Boduppal)"},
    {value: "Water Tank(Bolaram)", label:"Water Tank(Bolaram)"},
    {value: "West Marredpally", label:"West Marredpally"},
    {value: "West Venkatapuram Last Bus Stop", label:"West Venkatapuram Last Bus Stop"},
    {value: "White House", label:"White House"},
    {value: "Wipro Campus", label:"Wipro Campus"},
    {value: "Womens college Bus Stop", label:"Womens college Bus Stop"},
    {value: "YMCA(Koti) Bus Stop", label:"YMCA(Koti) Bus Stop"},
    {value: "YMCA(Secunderabad)", label:"YMCA(Secunderabad)"},
    {value: "Yacharam(Nagarjuna Sagar Road)", label:"Yacharam(Nagarjuna Sagar Road)"},
    {value: "Yadgiripally", label:"Yadgiripally"},
    {value: "Yadigirigutta APSRTC Bus Stand", label:"Yadigirigutta APSRTC Bus Stand"},
    {value: "Yakutpura", label:"Yakutpura"},
    {value: "Yamjal", label:"Yamjal"},
    {value: "Yamnampet", label:"Yamnampet"},
    {value: "Yamzal x Road", label:"Yamzal x Road"},
    {value: "Yapral Bus Stop", label:"Yapral Bus Stop"},
    {value: "Yelkaguda", label:"Yelkaguda"},
    {value: "Yellamma Temple", label:"Yellamma Temple"},
    {value: "Yellampet", label:"Yellampet"},
    {value: "Yellareddy Guda(Kapra)", label:"Yellareddy Guda(Kapra)"},
    {value: "Yenkapally", label:"Yenkapally"},
    {value: "Yousufguda Checkpost", label:"Yousufguda Checkpost"},
    {value: "Yousufguda basti Bus Stop", label:"Yousufguda basti Bus Stop"},
    {value: "ZTS Bus Stop", label:"ZTS Bus Stop"},
    {value: "Ziaguda", label:"Ziaguda"},
    {value: "Zinda tili smath Co", label:"Zinda tili smath Co"},
    {value: "Zoo Park", label:"Zoo Park"},
    {value: "bommalaramaram", label:"bommalaramaram"},
    {value: "patny", label:"patny"},
    {value: "polkampally", label:"polkampally"},
    {value: "vaidehi Nagar", label:"vaidehi Nagar"}
  ];
  const [selectedOptionsFrom, setSelectedOptionsFrom] = useState<undefined | { value: string; label: string }>(undefined);
  const [selectedOptionsTo, setSelectedOptionsTo] = useState<undefined | { value: string; label: string }>(undefined);
 
  function handleSelectTo(data:any) {
    setSelectedOptionsTo(data);
    console.log(data['value']);
  }
  function handleSelectFrom(data:any) {
    setSelectedOptionsFrom(data);
    console.log((data['value']));
  }
  function submitfn(event: any) {
    setLoading(true)
    event.preventDefault();
    console.log(selectedOptionsFrom?.label,selectedOptionsTo?.label);
    fetchData();
  }
  useEffect(() => {
    ReactGA.pageview(window.location.href);
    const currentUrl = window.location.href;
    console.log(currentUrl);
    const hasWord = currentUrl.includes('home');

    console.log(hasWord+"hasWord");
    document.getElementsByClassName('commonclass');
     for (let i = 0; i < document.getElementsByClassName('commonclass').length; i++) {
      console.log(document.getElementsByClassName('commonclass')[i].className = "commonclass");
    }

    if(currentUrl == 'http://localhost:3000/india/hyderabad/home' || currentUrl === 'https://hyderabad-city-mapper.web.app/' || currentUrl === 'https://hyderabad-city-mapper.web.app/#' || currentUrl === 'https://hyderabad-city-mapper.web.app' || currentUrl === 'https://www.cityroutemapper.com/india/hyderabad/home/' || currentUrl === 'https://www.cityroutemapper.com/india/hyderabad/home' || currentUrl === 'https://cityroutemapper.com/india/hyderabad/home/' || currentUrl === 'https://cityroutemapper.com/india/hyderabad/home'){
      var val = (document.getElementById("home") as HTMLInputElement);
      val.className+=" active";
      console.log("found");
    }
  }, []);
  function myFunction() {
    var x = (document.getElementById("myTopnav") as HTMLInputElement);
       
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  }
 
  async function fetchData() {
    try{
      
      if (selectedOptionsFrom?.label && selectedOptionsTo?.label) {
      console.log(selectedOptionsFrom.label);
      console.log(selectedOptionsTo.label);
    } else {
      alert("  endval and startval Cannnot be blank");
      return;
    }
    /*const response = await fetch("http://127.0.0.1:5000/hello?from="+selectedOptionsFrom.label+"&to="+selectedOptionsTo.label, {
      mode: 'cors'
    });
    const json = await response.json();
    setData(json);
    console.log(json);
    const jsonString = encodeURIComponent(JSON.stringify(json));
    */
    //router('/listing',{state:json});
    //router.push(`/listingpage?json=${jsonString}`);
   /* router.push({
      pathname: '/listingpage',
      query: {From:selectedOptionsFrom.label ,To:selectedOptionsTo.label}
    }); */
    router.push({
      pathname: `/india/hyderabad/listingpage/hyderabad-city-buses-that-goes-from-${encodeURIComponent(selectedOptionsFrom.label)}-to-${encodeURIComponent(selectedOptionsTo.label)}`,
    });} 
    catch (err){
       console.log(err)
    } 
    finally{
      setLoading(false)
    }
  }
  useEffect(() => {
    setLoading(true)
  }, [router])
  return (
    <div>
      {
        !loading ? <Loader/> : <></>  
      }
      <title>All Schedule Timing TimeTable of hyderabad City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, hyderabad City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings hyderabad city,hyderabad bus route,find bus schedule,hyderabad City route map, bus timetable pdf,city bus routes,bus routes list hyderabad,hyderabad City Bus"/>
          <meta name="description" content="Find hyderabad City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>
              <h1 className="h1class"><a href="" title="hyderabad Bus Routes " target="_self">hyderabad City Bus Routes</a></h1>

        <div id="map"></div>
        <div className="topnav" id="myTopnav">
        <Link id = "home" href="/india/hyderabad/home" className="commonclass">home</Link>
        <Link id = "bustimings" className="commonclass" href="/india/hyderabad/bustimings" >Search Bus</Link>
        <Link id = "allbuses" className="commonclass" href="/india/hyderabad/allbuses">All Buses</Link>
        <Link id = "contact" className="commonclass" href="/india/hyderabad/contact">Contact</Link>
        <Link id = "about" className="commonclass" href="/india/hyderabad/about">About</Link>
        <Link id = "metrotimings" className="commonclass" href="/india/hyderabad/metrotimings">Metro Timings</Link>

  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
<main>
<div className="flex-wrapper">

<div className="container">
  
  <div className="row">
  {/* <ul className = "no-bullets"> */}

  {/* <li><Link href="/usa-albany/services">Albany</Link></li>
  <li><Link href="/usa-albanyga/services">Albany, GA</Link></li>
  <li><Link href="/usa-albuquerque/services">Albuquerque</Link></li>
  <li><Link href="/usa-anchorage/services">Anchorage</Link></li>
  <li><Link href="/usa-appleton/services">Appleton - Oshkosh, WI</Link></li>
  <li><Link href="/usa-asheville/services">Asheville</Link></li>
  <li><Link href="/usa-athens/services">Athens</Link></li>
  <li><Link href="/usa-athensga/services">Athens, GA</Link></li>
  <li><Link href="/usa-atlanta/services">Atlanta</Link></li>
  <li><Link href="/usa-austin/services">Austin</Link></li>
  <li><Link href="/usa-bakersfield/services">Bakersfield, CA</Link></li>
  <li><Link href="/usa-batonrouge/services">Baton Rouge, LA</Link></li>
  <li><Link href="/usa-bendredmond/services">Bend-Redmond, OR</Link></li>
  <li><Link href="/usa-berkshire/services">Berkshire County</Link></li>
  <li><Link href="/usa-billings/services">Billings, MT</Link></li>
  <li><Link href="/usa-birmingham/services">Birmingham</Link></li>
  <li><Link href="/usa-bloomingtonnormal,il/services">Bloomington - Normal, IL</Link></li>
  <li><Link href="/usa-bloomingtonin/services">Bloomington, IN</Link></li>
  <li><Link href="/usa-boise/services">Boise</Link></li>
  <li><Link href="/usa-boston/services">Boston</Link></li>
  <li><Link href="/usa-bowlinggreen/services">Bowling Green,KY</Link></li>
  <li><Link href="/usa-brevard/services">Brevard County</Link></li>
  <li><Link href="/usa-buffalo/services">Buffalo</Link></li>
  <li><Link href="/usa-butte/services">Butte, MT</Link></li>
  <li><Link href="/usa-centrecounty/services">Centre County</Link></li>
  <li><Link href="/usa-champaign/services">Champaign - Urbana, IL</Link></li>
  <li><Link href="/usa-charlestonsc/services">Charleston, SC</Link></li>
  <li><Link href="/usa-charlestonwv/services">Charleston, WV</Link></li>
  <li><Link href="/usa-charlotte/services">Charlotte</Link></li>
  <li><Link href="/usa-charlottesville/services">Charlottesville</Link></li>
  <li><Link href="/usa-chattanooga/services">Chattanooga</Link></li>
  <li><Link href="/usa-cheyenne/services">Cheyenne</Link></li>
  <li><Link href="/usa-chicago/services">Chicago</Link></li>
  <li><Link href="/usa-cincinnati/services">Cincinnati</Link></li>
  <li><Link href="/usa-citruscounty/services">Citrus County</Link></li>
  <li><Link href="/usa-cleveland/services">Cleveland</Link></li>
  <li><Link href="/usa-colorado/services">Colorado Springs</Link></li>
  <li><Link href="/usa-columbiasc/services">Columbia, SC</Link></li>
  <li><Link href="/usa-columbus/services">Columbus</Link></li>
  <li><Link href="/usa-corpuschristi/services">Corpus Christi</Link></li>
  <li><Link href="/usa-dallas/services">Dallas - Fort Worth, TX</Link></li>
  <li><Link href="/usa-dayton/services">Dayton</Link></li>
  <li><Link href="/usa-delaware/services">Delaware</Link></li>
  <li><Link href="/usa-denver/services">Denver - Boulder, CO</Link></li>
  <li><Link href="/usa-desmoines/services">Des Moines</Link></li>
  <li><Link href="/usa-detroit/services">Detroit - Ann Arbor, MI</Link></li>
  <li><Link href="/usa-duluth/services">Duluth</Link></li>
  <li><Link href="/usa-elpaso/services">El Paso</Link></li>
  <li><Link href="/usa-erie/services">Erie - Meadville, PA</Link></li>
  <li><Link href="/usa-eugene/services">Eugene</Link></li>
  <li><Link href="/usa-fairbanks/services">Fairbanks</Link></li>
  <li><Link href="/usa-fargo/services">Fargo</Link></li>
  <li><Link href="/usa-fayetteville/services">Fayetteville</Link></li>
  <li><Link href="/usa-flagstaff/services">Flagstaff</Link></li>
  <li><Link href="/usa-flint/services">Flint MI</Link></li>
  <li><Link href="/usa-fortcollins/services">Fort Collins</Link></li>
  <li><Link href="/usa-fortwayne/services">Fort Wayne</Link></li>
  <li><Link href="/usa-fresno/services">Fresno</Link></li>
  <li><Link href="/usa-gainesville/services">Gainesville</Link></li>
  <li><Link href="/usa-grandforks/services">Grand Forks</Link></li>
  <li><Link href="/usa-grandrapids/services">Grand Rapids</Link></li>
  <li><Link href="/usa-greenbay/services">Green Bay</Link></li>
  <li><Link href="/usa-greensboro/services">Greensboro</Link></li>
  <li><Link href="/usa-greenville/services">Greenville</Link></li>
  <li><Link href="/usa-gunnison/services">Gunnison</Link></li>
  <li><Link href="/usa-hampton/services">Hampton Roads</Link></li>
  <li><Link href="/usa-hawai/services">Hawaii County, HI</Link></li>
  <li><Link href="/usa-hernando/services">Hernando County</Link></li>
  <li><Link href="/usa-hillcountry,tx/services">Hill Country, TX</Link></li>
  <li><Link href="/usa-hinesville/services">Hinesville, GA</Link></li>
  <li><Link href="/usa-honolulu/services">Honolulu</Link></li>
  <li><Link href="/usa-houston/services">Houston</Link></li>
  <li><Link href="/usa-humboldtcounty/services">Humboldt County</Link></li>
  <li><Link href="/usa-huntsville/services">Huntsville</Link></li>
  <li><Link href="/usa-indianapolis/services">Indianapolis</Link></li>
  <li><Link href="/usa-jacksonms/services">Jackson, MS</Link></li>
  <li><Link href="/usa-jacksontn/services">Jackson, TN</Link></li>
  <li><Link href="/usa-jacksonville/services">Jacksonville Johns County</Link></li>
  <li><Link href="/usa-johnson/services">Johnson City</Link></li>
  <li><Link href="/usa-jonesboro/services">Jonesboro</Link></li>
  <li><Link href="/usa-joplin/services">Joplin</Link></li>
  <li><Link href="/usa-juneau/services">Juneau</Link></li>
  <li><Link href="/usa-kalamazoo/services">Kalamazoo, MI</Link></li>
  <li><Link href="/usa-kalispell/services">Kalispell, MT</Link></li>
  <li><Link href="/usa-kansas/services">Kansas City</Link></li>
  <li><Link href="/usa-kauai/services">Kauai</Link></li>
  <li><Link href="/usa-ketchum/services">Ketchum</Link></li>
  <li><Link href="/usa-knoxville/services">Knoxville</Link></li>
  <li><Link href="/usa-lafayette/services">Lafayette</Link></li>
  <li><Link href="/usa-laketahoe/services">Lake Tahoe - Reno, NV</Link></li>
  <li><Link href="/usa-lancaster/services">Lancaster</Link></li>
  <li><Link href="/usa-lansing/services">Lansing</Link></li>
  <li><Link href="/usa-laredo/services">Laredo, TX</Link></li>
  <li><Link href="/usa-lasvegas/services">Las Vegas</Link></li>
  <li><Link href="/usa-lawrence/services">Lawrence</Link></li>
  <li><Link href="/usa-leecounty/services">Lee County</Link></li>
  <li><Link href="/usa-lexington/services">Lexington</Link></li>
  <li><Link href="/usa-lincoln/services">Lincoln, NE</Link></li>
  <li><Link href="/usa-littlerock/services">Little Rock</Link></li>
  <li><Link href="/usa-losangeles/services">Los Angeles</Link></li>
  <li><Link href="/usa-louisville/services">Louisville</Link></li>
  <li><Link href="/usa-lubbock/services">Lubbock, TX</Link></li>
  <li><Link href="/usa-madison/services">Madison</Link></li>
  <li><Link href="/usa-manchester/services">Manchester, NH</Link></li>
  <li><Link href="/usa-maui/services">Maui, HI</Link></li>
  <li><Link href="/usa-mcallen/services">McAllen</Link></li>
  <li><Link href="/usa-memphis/services">Memphis</Link></li>
  <li><Link href="/usa-miami/services">Miami</Link></li>
  <li><Link href="/usa-milwaukee/services">Milwaukee - Waukesha, WI</Link></li>
  <li><Link href="/usa-minneapolis/services">Minneapolis - St. Paul, MN</Link></li>
  <li><Link href="/usa-missoula/services">Missoula</Link></li>
  <li><Link href="/usa-modesto/services">Modesto</Link></li>
  <li><Link href="/usa-moline/services">Moline</Link></li>
  <li><Link href="/usa-monroe/services">Monroe</Link></li>
  <li><Link href="/usa-montgomery/services">Montgomery</Link></li>
  <li><Link href="/usa-morgantown/services">Morgantown</Link></li>
  <li><Link href="/usa-nashville/services">Nashville</Link></li>
  <li><Link href="/usa-navajonation/services">Navajo Nation</Link></li>
  <li><Link href="/usa-neworleans/services">New Orleans</Link></li>
  <li><Link href="/usa-newjersey/services">New York - New Jersey</Link></li>
  <li><Link href="/usa-northwestarkansas/services">Northwest Arkansas</Link></li>
  <li><Link href="/usa-ocala/services">Ocala</Link></li>
  <li><Link href="/usa-okaloosacounty/services">Okaloosa County</Link></li>
  <li><Link href="/usa-oklahoma/services">Oklahoma City</Link></li>
  <li><Link href="/usa-omaha/services">Omaha</Link></li>
  <li><Link href="/usa-orlando/services">Orlando</Link></li>
  <li><Link href="/usa-palmdesert/services">Palm Desert, CA</Link></li>
  <li><Link href="/usa-panama/services">Panama City</Link></li>
  <li><Link href="/usa-pensacola/services">Pensacola</Link></li>
  <li><Link href="/usa-peoria/services">Peoria, IL</Link></li>
  <li><Link href="/usa-philadelphia/services">Philadelphia</Link></li>
  <li><Link href="/usa-phoenix/services">Phoenix</Link></li>
  <li><Link href="/usa-pittsburgh/services">Pittsburgh</Link></li>
  <li><Link href="/usa-portlandme/services">Portland, ME</Link></li>
  <li><Link href="/usa-portlandor/services">Portland, OR</Link></li>
  <li><Link href="/usa-racine/services">Racine</Link></li>
  <li><Link href="/usa-raleigh/services">Raleigh</Link></li>
  <li><Link href="/usa-redding/services">Redding</Link></li>
  <li><Link href="/usa-richmond/services">Richmond, VA</Link></li>
  <li><Link href="/usa-roanoke/services">Roanoke Valley</Link></li>
  <li><Link href="/usa-rockford/services">Rockford, IL</Link></li>
  <li><Link href="/usa-rockymountnc/services">Rocky Mount, NC</Link></li>
  <li><Link href="/usa-rockymountnational/services">Rocky Mountain National Park</Link></li>
  <li><Link href="/usa-roguevalley/services">Rogue Valley</Link></li>
  <li><Link href="/usa-roseburg/services">Roseburg, OR</Link></li>
  <li><Link href="/usa-sacramento/services">Sacramento</Link></li>
  <li><Link href="/usa-saltlakecity/services">Salt Lake City</Link></li>
  <li><Link href="/usa-sanantonio/services">San Antonio</Link></li>
  <li><Link href="/usa-sandiego/services">San Diego</Link></li>
  <li><Link href="/usa-sanfrancisco/services">San Francisco - San Jose, CA</Link></li>
  <li><Link href="/usa-sanluis/services">San Luis Obispo</Link></li>
  <li><Link href="/usa-sandusky/services">Sandusky, OH</Link></li>
  <li><Link href="/usa-santafe/services">Santa Fe</Link></li>
  <li><Link href="/usa-sarasota/services">Sarasota</Link></li>
  <li><Link href="/usa-savannah/services">Savannah</Link></li>
  <li><Link href="/usa-seacoast/services">Seacoast Region</Link></li>
  <li><Link href="/usa-seattle/services">Seattle - Tacoma, WA</Link></li>
  <li><Link href="/usa-shreveport/services">Shreveport, LA</Link></li>
  <li><Link href="/usa-siouxcity/services">Sioux City</Link></li>
  <li><Link href="/usa-siouxfall/services">Sioux Falls</Link></li>
  <li><Link href="/usa-siskyou/services">Siskyou County, CA</Link></li>
  <li><Link href="/usa-sitka/services">Sitka</Link></li>
  <li><Link href="/usa-slippery/services">Slippery Rock, PA</Link></li>
  <li><Link href="/usa-southbend/services">South Bend, IN</Link></li>
  <li><Link href="/usa-spokane/services">Spokane</Link></li>
  <li><Link href="/usa-springfield/services">Springfield</Link></li>
  <li><Link href="/usa-springfieldmo/services">Springfield, MO</Link></li>
  <li><Link href="/usa-stlouis/services">St Louis</Link></li>
  <li><Link href="/usa-stgeorge/services">St. George</Link></li>
  <li><Link href="/usa-stockton/services">Stockton</Link></li>
  <li><Link href="/usa-tallahassee/services">Tallahassee, FL</Link></li>
  <li><Link href="/usa-tampast/services">Tampa - St. Petersburg, FL</Link></li>
  <li><Link href="/usa-terrehaute/services">Terre Haute</Link></li>
  <li><Link href="/usa-toledo/services">Toledo</Link></li>
  <li><Link href="/usa-topeka/services">Topeka</Link></li>
  <li><Link href="/usa-traversecity/services">Traverse City</Link></li>
  <li><Link href="/usa-tucson/services">Tucson</Link></li>
  <li><Link href="/usa-tulsa/services">Tulsa</Link></li>
  <li><Link href="/usa-vermont/services">Vermont</Link></li>
  <li><Link href="/usa-victorville/services">Victorville Barstow</Link></li>
  <li><Link href="/usa-volusiacounty/services">Volusia County</Link></li>
  <li><Link href="/usa-waco/services">Waco, TX</Link></li>
  <li><Link href="/usa-walla/services">Walla Walla, WA</Link></li>
  <li><Link href="/usa-waltoncounty/services">Walton County, FL</Link></li>
  <li><Link href="/usa-washington/services">Washington, D.C. - Baltimore, MD</Link></li>
  <li><Link href="/usa-wichita/services">Wichita</Link></li>
  <li><Link href="/usa-wichitafalls/services">Wichita Falls, TX</Link></li>
  <li><Link href="/usa-wilmington/services">Wilmington</Link></li>
  <li><Link href="/usa-yakima/services">Yakima</Link></li>
  <li><Link href="/usa-yorkcounty/services">York County</Link></li>
  <li><Link href="/usa-youngstown/services">Youngstown, OH</Link></li>
  <li><Link href="/usa-yumacounty/services">Yuma County</Link></li> */}



{/* </ul> */}
  </div>
  
</div >
  <footer>
    <p>&copy; 2023 Cityroutemapper</p>
  </footer>
  </div>
  </main>
  
    </div>
  );
};

export default India;
