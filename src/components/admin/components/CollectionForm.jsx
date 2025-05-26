import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CollectionForm = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="collection">Collection</Label>
        <Input id="collection" placeholder="e.g., Harry Potter, Marvel, Disney" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Enter a description for this collection"
          rows={3}
        />
      </div>
    </div>
  );
};

export default CollectionForm;
