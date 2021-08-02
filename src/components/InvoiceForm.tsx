import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";
import LineItems from "./LineItems";
import TextInput from "./TextInput";

type Recipient = { name: string; email: string };
const recipientEmails: Recipient[] = [
  { name: "Mathews Baxter", email: "mathewsbaxter@steelfab.com" },
  { name: "Thornton Anthony", email: "thorntonanthony@steelfab.com" },
  { name: "Johns Boyle", email: "johnsboyle@steelfab.com" },
  { name: "Workman Guzman", email: "workmanguzman@steelfab.com" },
];

const RecipientUser = ({ value }: { value: Recipient }) => {
  return (
    <span>
      {value.name}{" "}
      <small className="text-sm text-gray-300">({value.email})</small>
    </span>
  );
};

const InvoiceForm = () => {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium text-gray-900">#AL2545</h2>
      </div>

      <div className="border rounded p-2 mt-4 bg-blue-50">
        <label className="mb-2 block text-sm">Recipient Email</label>
        <Dropdown
          options={recipientEmails}
          defaultValue={recipientEmails[0]}
          optionRenderer={(r: Recipient) => <RecipientUser value={r} />}
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-gray-500 text-sm">
          Project / Description
        </label>
        <TextInput placeholder="Project / Description" />
      </div>

      <div className="mt-4 flex gap-4">
        <div>
          <label className="mb-2 block text-gray-500 text-sm">Issued On</label>
          <TextInput placeholder="Issued On" />
        </div>
        <div>
          <label className="mb-2 block text-gray-500 text-sm">Due On</label>
          <TextInput placeholder="Due On" />
        </div>
      </div>

      <div className="mt-4">
        <Checkbox label="This is a recuring invoice (monthly)" />
      </div>

      <div className="mt-4">
        <LineItems />
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-gray-500 text-sm">
          Additional Notes
        </label>
        <textarea
          className="appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          rows={3}
        ></textarea>
      </div>
    </div>
  );
};

export default InvoiceForm;
