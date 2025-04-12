export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driveing License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Adhaar Card",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Govind Kumar",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Isha Gupta",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Bicky Verma",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Rahul Kumar ",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Abhinav Singh",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Anjani Singh",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Vikas Kumar",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Ishika Soni",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Abhishek Kumar",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
