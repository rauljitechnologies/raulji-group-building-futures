const API_BASE = "https://api.raulji.com/api/v1";
const API_KEY = "rcrm_live_co02_6982322c6e77e7b9038b9b36ec44721d";

interface LeadData {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  source?: string;
  notes?: string;
  customFields?: Record<string, string>;
}

interface LeadResponse {
  success: boolean;
  data?: unknown;
  error?: string;
}

export async function submitLead(data: LeadData): Promise<LeadResponse> {
  try {
    const response = await fetch(`${API_BASE}/public/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email || undefined,
        city: data.city || undefined,
        source: data.source || "WEBSITE_FORM",
        notes: data.notes || undefined,
        customFields: data.customFields || undefined,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return { success: false, error: result.error || "Something went wrong. Please try again." };
    }

    return { success: true, data: result.data };
  } catch {
    return { success: false, error: "Network error. Please check your connection and try again." };
  }
}
