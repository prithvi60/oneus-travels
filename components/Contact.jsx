"use client";

import { Input, Textarea } from "@nextui-org/input";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

export const Contact = ({ blog }) => {
    const initialFormData = {
        userName: "",
        userEmail: "",
        phoneNo: "",
        enquiry: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(true);

        try {
            const response = await fetch("/api/sendmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(`Email API Error: ${response.status} - ${errorData}`);
            }

            const emailDataResult = await response.json();
            console.log(emailDataResult);
            if (emailDataResult.success) {
                setStatus(false);
                setFormData(initialFormData);
                e.target.reset();
                window.location.href = "/thankyou";
            } else {
                throw new Error("Email sending failed.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus(false);
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className={`z-20 w-full h-full ${blog ? "hidden lg:block rounded-lg lg:w-[30%] shadow-md lg:sticky lg:top-24 overflow-hidden border xl:mx-5" : "rounded-md lg:w-1/2 space-y-4"}`}
        >
            {blog ? (
                <h3
                    className={` font-semibold tracking-normal font-Gilroy bg-secondary text-white p-5 overflow-hidden text-base xl:text-lg`}
                >
                    Better business travel with Corporate Travel Management
                </h3>
            ) : (
                <h3
                    className={` font-semibold tracking-normal font-Gilroy bg-transparent text-secondary text-lg md:text-xl xl:text-2xl`}
                >
                    Take your first step towards better business travel with Corporate
                    Travel Management.
                </h3>
            )}
            {/* <h3
                className={` font-semibold tracking-normal font-Gilroy ${blog ? "bg-secondary text-white p-5 overflow-hidden text-lg " : "bg-transparent text-secondary text-lg md:text-xl xl:text-2xl"}`}
            >
                Take your first step towards better business travel with Corporate
                Travel Management.
            </h3> */}
            <div className={`${blog && "p-5 bg-[#F8F9F8]"} space-y-4`}>
                <Input
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    isRequired
                    size="lg"
                    label="Name"
                    placeholder="Enter Your First Name"
                    endContent={
                        <MdOutlineDriveFileRenameOutline className="text-2xl opacity-50 relative -top-2" />
                    }
                    classNames={{
                        inputWrapper: "bg-primary font-Poppins font-normal",
                    }}
                    variant="faded"
                    color="secondary"
                />
                <Input
                    name="userEmail"
                    value={formData.userEmail}
                    onChange={handleChange}
                    isRequired
                    size="lg"
                    label="Email"
                    placeholder="Enter Your Email"
                    endContent={<IoMailOutline className="text-lg opacity-50" />}
                    classNames={{
                        inputWrapper: "bg-primary font-Poppins font-normal -top-2",
                    }}
                    variant="faded"
                    color="secondary"
                />
                <Input
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    size="lg"
                    isRequired
                    label="Phone Number"
                    placeholder="Enter Your Ph. No."
                    endContent={
                        <FaPhoneAlt className="text-lg opacity-50 relative -top-2" />
                    }
                    classNames={{
                        inputWrapper: "bg-primary font-Poppins font-normal -top-2",
                    }}
                    variant="faded"
                    color="secondary"
                />
                <Textarea
                    name="enquiry"
                    value={formData.enquiry}
                    onChange={handleChange}
                    isRequired
                    label="Enquiry"
                    placeholder="Feel free to mention your company, where you're located and what sort of service you are looking for"
                    classNames={{
                        input: "placeholder:text-gray-400",
                        inputWrapper: "bg-primary font-Poppins font-normal -top-2",
                    }}
                    variant="faded"
                    color="secondary"
                />
                <button
                    type="submit"
                    className={`bg-success hover:bg-success/80 text-primary relative shadow-lg px-5 py-2 transition-all ease-linear group rounded-full font-bold`}
                    disabled={status}
                >
                    {status ? "Submiting..." : "Submit"}
                </button>
            </div>
        </form>
    );
};
