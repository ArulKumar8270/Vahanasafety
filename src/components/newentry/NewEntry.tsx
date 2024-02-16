import React, { useState, useRef } from "react";
import SideBar from "../sidebar/SideBar";
import TopBar from "../sidebar/topbar/TopBar";
import "./newentry.css";

import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import { configData } from "@/config";
import axios from "axios";

function NewEntry() {
  const tamilNaduRTOs = [
    { rtonum: "TN-01", rtoarea: "Chennai (Central)" },
    { rtonum: "TN-02", rtoarea: "Chennai (North West)" },
    { rtonum: "TN-03", rtoarea: "Chennai (North East)" },
    { rtonum: "TN-04", rtoarea: "Chennai (West)" },
    { rtonum: "TN-05", rtoarea: "Chennai (South West)" },
    { rtonum: "TN-06", rtoarea: "Chennai (South East)" },
    { rtonum: "TN-07", rtoarea: "Vellore" },
    { rtonum: "TN-09", rtoarea: "Krishnagiri" },
    { rtonum: "TN-10", rtoarea: "Kancheepuram" },
    { rtonum: "TN-11", rtoarea: "Tiruvallur" },
    { rtonum: "TN-12", rtoarea: "Salem" },
    { rtonum: "TN-13", rtoarea: "Dharmapuri" },
    { rtonum: "TN-14", rtoarea: "Cuddalore" },
    { rtonum: "TN-15", rtoarea: "Villupuram" },
    { rtonum: "TN-16", rtoarea: "Coimbatore (Central)" },
    { rtonum: "TN-17", rtoarea: "Coimbatore (North)" },
    { rtonum: "TN-18", rtoarea: "Coimbatore (South)" },
    { rtonum: "TN-19", rtoarea: "Tirupur" },
    { rtonum: "TN-20", rtoarea: "Erode" },
    { rtonum: "TN-21", rtoarea: "Tiruchirapalli" },
    { rtonum: "TN-22", rtoarea: "Karur" },
    { rtonum: "TN-23", rtoarea: "Perambalur" },
    { rtonum: "TN-24", rtoarea: "Madurai (Central)" },
    { rtonum: "TN-25", rtoarea: "Madurai (West)" },
    { rtonum: "TN-26", rtoarea: "Dindigul" },
    { rtonum: "TN-27", rtoarea: "Ramanathapuram" },
    { rtonum: "TN-28", rtoarea: "Sivagangai" },
    { rtonum: "TN-29", rtoarea: "Theni" },
    { rtonum: "TN-30", rtoarea: "Virudhunagar" },
    { rtonum: "TN-31", rtoarea: "Sivakasi" },
    { rtonum: "TN-32", rtoarea: "Tuticorin" },
    { rtonum: "TN-33", rtoarea: "Nagercoil" },
    { rtonum: "TN-34", rtoarea: "Kanyakumari" },
    { rtonum: "TN-35", rtoarea: "Namakkal" },
    { rtonum: "TN-36", rtoarea: "Thiruvarur" },
    { rtonum: "TN-37", rtoarea: "Nagapattinam" },
    { rtonum: "TN-38", rtoarea: "Thanjavur" },
    { rtonum: "TN-39", rtoarea: "Pudukkottai" },
    { rtonum: "TN-40", rtoarea: "Tirunelveli (Central)" },
    { rtonum: "TN-41", rtoarea: "Tirunelveli (West)" },
    { rtonum: "TN-42", rtoarea: "Tirunelveli (East)" },
    { rtonum: "TN-43", rtoarea: "Tirunelveli (South)" },
    { rtonum: "TN-45", rtoarea: "Chidambaram" },
    { rtonum: "TN-46", rtoarea: "Cumbum" },
    { rtonum: "TN-47", rtoarea: "Arakkonam" },
    { rtonum: "TN-48", rtoarea: "Sankarankovil" },
    { rtonum: "TN-49", rtoarea: "Usilampatti" },
    { rtonum: "TN-50", rtoarea: "Avadi" },
    { rtonum: "TN-51", rtoarea: "Kallakurichi" },
    { rtonum: "TN-52", rtoarea: "Rasipuram" },
    { rtonum: "TN-53", rtoarea: "Palani" },
    { rtonum: "TN-54", rtoarea: "Ambattur" },
    { rtonum: "TN-55", rtoarea: "Chengalpattu" },
    { rtonum: "TN-56", rtoarea: "Dharmapuri (North)" },
    { rtonum: "TN-57", rtoarea: "Gudiyatham" },
    { rtonum: "TN-58", rtoarea: "Uthukkottai" },
    { rtonum: "TN-59", rtoarea: "Thirupathur" },
    { rtonum: "TN-60", rtoarea: "Arni" },
    { rtonum: "TN-61", rtoarea: "Vaniyambadi" },
    { rtonum: "TN-62", rtoarea: "Krishnagiri (North)" },
    { rtonum: "TN-63", rtoarea: "Hosur" },
    { rtonum: "TN-64", rtoarea: "Vridhachalam" },
    { rtonum: "TN-65", rtoarea: "Gingee" },
    { rtonum: "TN-66", rtoarea: "Walajapet" },
    { rtonum: "TN-67", rtoarea: "Dharapuram" },
    { rtonum: "TN-68", rtoarea: "Udumalpet" },
    { rtonum: "TN-69", rtoarea: "Palayamkottai" },
    { rtonum: "TN-70", rtoarea: "Sankarankoil" },
    { rtonum: "TN-71", rtoarea: "Puliyangudi" },
    { rtonum: "TN-72", rtoarea: "Thiruchendur" },
    { rtonum: "TN-73", rtoarea: "Rajapalayam" },
    { rtonum: "TN-74", rtoarea: "Sivakasi (North)" },
    { rtonum: "TN-75", rtoarea: "Tenkasi" },
    { rtonum: "TN-76", rtoarea: "Ambur" },
    { rtonum: "TN-77", rtoarea: "Villupuram (North)" },
    { rtonum: "TN-78", rtoarea: "Rasipuram (South)" },
    { rtonum: "TN-79", rtoarea: "Aruppukottai" },
    { rtonum: "TN-80", rtoarea: "Cheyyar" },
    { rtonum: "TN-81", rtoarea: "Neyveli" },
    { rtonum: "TN-82", rtoarea: "Mayiladuthurai" },
    { rtonum: "TN-83", rtoarea: "Sirkazhi" },
    { rtonum: "TN-84", rtoarea: "Thiruvarur (North)" },
    { rtonum: "TN-85", rtoarea: "Thiruvannamalai" },
    { rtonum: "TN-86", rtoarea: "Villupuram (South)" },
    { rtonum: "TN-87", rtoarea: "Kumbakonam" },
    { rtonum: "TN-88", rtoarea: "Pattukottai" },
    { rtonum: "TN-89", rtoarea: "Thiruvaiyaru" },
    { rtonum: "TN-90", rtoarea: "Nannilam" },
    { rtonum: "TN-91", rtoarea: "Vedaranyam" },
    { rtonum: "TN-92", rtoarea: "Karaikkal" },
    { rtonum: "TN-93", rtoarea: "Pudukottai (North)" },
    { rtonum: "TN-94", rtoarea: "Perundurai" },
    { rtonum: "TN-95", rtoarea: "Kangayam" },
    { rtonum: "TN-96", rtoarea: "Palani (North)" },
    { rtonum: "TN-97", rtoarea: "Erode (North)" },
    { rtonum: "TN-98", rtoarea: "Tirupur (North)" },
    { rtonum: "TN-99", rtoarea: "Coimbatore (North East)" },
  ];

  const globaccessToken = useSelector(
    (state: RootState) => state.user.accessToken
  );

  const [FormData, setFormData] = useState({
    date: "",
    vehicleregno: "",
    vehiclemanufacturingyear: "",
    chassisnum: "",
    engineno: "",
    vehiclemake: "",
    vehiclemodel: "",
    ownername: "",
    address: "",
    phoneo: "",
    rto: "",
    hologramnum: "",
    oldcertificatenum: "",
    oldcertificaterto: "",
    oldcertificatedate: "",
    remarks: "",
    red20mm: "",
    white20mm: "",
    red50mm: "",
    white50mm: "",
    yellow50mm: "",
    red80cercularreflector: "",
    white80cercularreflector: "",
    yellow80cercularreflector: "",
    class3: "",
    class4: "",
    frontimage: "",
    backimage: "",
    leftimage: "",
    rightimage: "",
    rcimage: "",
  });

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Usage
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  const handleImageChange = (e, imageField) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      [imageField]: file,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePrint = async (e) => {
    console.log(FormData, "FormDatasf54235423");
    // e.preventDefault();
    try {
      const headers = {
        "Content-Type": "application/json; charset=UTF-8",
        app: "MTIzNDV8Vmdud2Vi",
        mode: "no-cors",
      };
      const response = await axios.post(
        `${configData?.targetUrl}/registrations`,
        FormData,
        { headers }
      );
      console.log(response.data); // This will log the response data to the console
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="font-sans flex h-full bg-gray-50 dark:bg-gray-900">
      <SideBar />
      <div className="w-full">
        <TopBar />
        <main className="h-full  overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              New Entry
            </h2>

            <a className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span>Welcome To Vahan Safety</span>
              </div>
              <span>View more </span>
            </a>

            <div className="bg-white">
              <form onSubmit={handlePrint}>
                <div className="p-6">
                  <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Date
                      </label>
                      <input
                        type="date"
                        placeholder="Enter your first name"
                        value={FormData.date}
                        name="date"
                        onChange={handleChange}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Vehicle Reg No
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Vehicle Reg No"
                        name="vehicleregno"
                        onChange={handleChange}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Vehicle Manufacturing Year
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Vehicle Manufacturing Year"
                        name="vehiclemanufacturingyear"
                        onChange={handleChange}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Chassis No
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Chassis No"
                        name="chassisnum"
                        onChange={handleChange}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2 block text-black dark:text-white">
                      Engine No : <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Engine No"
                      name="engineno"
                      onChange={handleChange}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="mb-3 block text-black dark:text-white">
                      Vechicle Make :
                    </label>
                    <div className="relative z-20 bg-white dark:bg-form-input">
                      <input
                        type="text"
                        placeholder="Enter your vehicle Make"
                        name="vehiclemake"
                        onChange={handleChange}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-3 block text-black dark:text-white">
                      Vechicle Model :
                    </label>
                    <div className="relative z-20 bg-white dark:bg-form-input">
                      <input
                        type="text"
                        placeholder="Enter your vehicle model"
                        name="vehiclemodel"
                        onChange={handleChange}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2 block text-black dark:text-white">
                      Owner Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Owner Name"
                      name="ownername"
                      onChange={handleChange}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="mb-2 block text-black dark:text-white">
                      Address :
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Enter your Address"
                      name="address"
                      onChange={handleChange}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2 block text-black dark:text-white">
                      Phone No :
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Phone No"
                      name="phoneo"
                      onChange={handleChange}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="mb-2 block text-black dark:text-white">
                      RTO:
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                        <option value="">Select Your RTO</option>
                        {tamilNaduRTOs.map((rto) => (
                          <option value={rto.rtonum} key={rto.rtonum}>
                            {rto.rtonum} - {rto.rtoarea}
                          </option>
                        ))}
                      </select>
                      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                        <svg
                          className="fill-current"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                              fill=""
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2 block text-black dark:text-white">
                      Hologram Number:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Hologram Number"
                      name="hologramnum"
                      onChange={handleChange}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div>
                    <div>
                      <h3 className="text-black font-bold mt-8">
                        Old Certificate Details (Optional)
                      </h3>
                    </div>
                    <div>
                      <div className="mb-4 mt-4">
                        <label className="mb-2 block text-black dark:text-white">
                          Old Certificate Number :
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Hologram Number"
                          name="oldcertificatenum"
                          onChange={handleChange}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="mb-2 block text-black dark:text-white">
                      RTO:
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                        <option value="">Select Your RTO</option>
                        {tamilNaduRTOs.map((rto) => (
                          <option value={rto.rtonum} key={rto.rtonum}>
                            {rto.rtonum} - {rto.rtoarea}
                          </option>
                        ))}
                      </select>
                      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                        <svg
                          className="fill-current"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                              fill=""
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="mb-4 w-full">
                    <div className="w-full ">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Date
                      </label>
                      <input
                        type="date"
                        placeholder="Enter your first name"
                        name="oldcertificatedate"
                        onChange={handleChange}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full mt-4">
                      <label className="mb-2 block text-black dark:text-white">
                        Remarks :
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Vehicle Reg No"
                        name="remarks"
                        onChange={handleChange}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="flex justify-items-center items-center w-full">
                    <h3 className="text-black font-bold mt-8 text-center">
                      Reflective Tape Details
                    </h3>
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-4">
                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                          RED 20MM :
                        </label>
                        <input
                          type="text area"
                          placeholder="Enter your first name"
                          value={"0.00"}
                          name="red20mm"
                          onChange={handleChange}
                          className="w-full cursor-not-allowed rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                          White 20MM :
                        </label>
                        <input
                          type="text area"
                          placeholder="Enter your first name"
                          value={"0.00"}
                          name="white20mm"
                          onChange={handleChange}
                          className="w-full cursor-not-allowed bg-black-500 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-4">
                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                          RED 50MM :
                        </label>
                        <input
                          type="text area"
                          placeholder="Enter your first name"
                          value={"2.00"}
                          name="red50mm"
                          onChange={handleChange}
                          className="w-full cursor-not-allowed rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="w-full xl:w-1/2">
                      <div className="items-center w-80 gap-4 used-sticker-detail">
                        <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                          White 50MM :
                        </label>
                        <input
                          type="text area"
                          placeholder="Enter your first name"
                          value={"2.00"}
                          name="white50mm"
                          onChange={handleChange}
                          className="w-full cursor-not-allowed bg-black-500 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-4">
                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                          Yellow 50MM :
                        </label>
                        <input
                          type="text area"
                          placeholder="Enter your first name"
                          value={"20.00"}
                          name="yellow50mm"
                          onChange={handleChange}
                          className="w-full cursor-not-allowed rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                          80MM RED Circular Reflector :
                        </label>
                        <input
                          type="text area"
                          placeholder="Enter your first name"
                          value={"0.00"}
                          name="red80cercularreflector"
                          onChange={handleChange}
                          className="w-full cursor-not-allowed bg-black-500 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-4">
                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                          80MM White Circular Reflector :
                        </label>
                        <input
                          type="text area"
                          placeholder="Enter your first name"
                          value={"0.00"}
                          name="white80cercularreflector"
                          onChange={handleChange}
                          className="w-full cursor-not-allowed rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                          80MM Yellow Circular Reflector :
                        </label>
                        <input
                          type="text area"
                          placeholder="Enter your first name"
                          value={"0.00"}
                          name="yellow80cercularreflector"
                          onChange={handleChange}
                          className="w-full cursor-not-allowed bg-black-500 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-4">
                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                          Class 3:
                        </label>
                        <input
                          type="text area"
                          placeholder="Enter your first name"
                          value={"0"}
                          name="class3"
                          onChange={handleChange}
                          className="w-full cursor-not-allowed rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="w-full xl:w-1/2">
                      <div className="used-sticker-detail items-center w-80 gap-4">
                        <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                          Class 4 :
                        </label>
                        <input
                          type="text area"
                          placeholder="Enter your first name"
                          value={"0"}
                          name="class4"
                          onChange={handleChange}
                          className="w-full cursor-not-allowed bg-black-500 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-items-center items-center w-full">
                    <h3 className="text-black font-bold mt-4 text-center">
                      Reflective Tape Details
                    </h3>
                  </div>
                  <div className="rounded-sm mt-4 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="flex flex-col gap-5.5 p-6">
                      <div>
                        <label className="mb-3 block text-black dark:text-white">
                          Front Image
                        </label>
                        <input
                          name="frontimage"
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e, "frontimage")}
                          className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                        />
                      </div>

                      <div className="mt-4">
                        <label className="mb-3 block text-black dark:text-white">
                          Back Side Image
                        </label>
                        <input
                          type="file"
                          name="backimage"
                          onChange={(e) => handleImageChange(e, "backimage")}
                          className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                        />
                      </div>

                      <div className="mt-4">
                        <label className="mb-3 block text-black dark:text-white">
                          Right Side Image
                        </label>
                        <input
                          type="file"
                          name="rightimage"
                          onChange={(e) => handleImageChange(e, "rightimage")}
                          className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                        />
                      </div>

                      <div className="mt-4">
                        <label className="mb-3 block text-black dark:text-white">
                          Left Side Image
                        </label>
                        <input
                          type="file"
                          name="leftimage"
                          onChange={(e) => handleImageChange(e, "leftimage")}
                          className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                        />
                      </div>

                      <div className="mt-4">
                        <label className="mb-3 block text-black dark:text-white">
                          RC Image
                        </label>
                        <input
                          type="file"
                          name="leftimage"
                          onChange={(e) => handleImageChange(e, "rcimage")}
                          className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="flex w-full bg-purple-600 text-white justify-center rounded bg-primary p-3 font-medium text-gray">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default NewEntry;
