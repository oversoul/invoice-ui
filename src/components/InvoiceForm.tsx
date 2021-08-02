import Dropdown from "./Dropdown";

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
      {value.name} <small className="text-sm text-gray-300">({value.email})</small>
    </span>
  );
};

const InvoiceForm = () => {
  return (
    <div>
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
    </div>
  );
};

export default InvoiceForm;
