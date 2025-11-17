##১. Interface এবং type এর মধ্যে পার্থক্য।

Interface এবং type এর মধ্যে পার্থক্য হল, দুটিই অবজেক্টের স্ট্রাকচার বা শেপ নির্ধারণ করতে ব্যবহৃত হয় তবে কিছু পার্থক্য রয়েছে,  interface একাধিকবার ডিক্লেয়ার কজা যায় কিন্তু type একাধিকবার ডিক্লেয়ার কজা যায় না, interface একাধিকবার ডিক্লেয়ার করলে TypeScript এ  সব গুলোকে একসাথে করে ফেলে, অর্থাৎ মার্জ করে। কিন্তু type এ এটি সম্ভব না, কিন্তু type পুনরায় ঘোষণা করলে error দিবে।




##২. Union এবং Intersection type এর মধ্যে পার্থক্য।

###Union type, একাধিক টাইপের যেকোনো একটি হলেই হবে। 

let value: string | number;

value = "Mehedi Zaman";
value = 01816312962;


###Intersection type, একাধিক টাইপকে একত্রে একটি টাইপে রূপান্তর করা, অর্থাৎ সবগুলো type থাকতে হবে।

interface Name {
  name: string;
}

interface Phone {
  phone: number;
}

type Person = Name & Phone;

const personDetails: Person = {
  name: "Mehedi Zaman",
  phone: 01816312962;
};
