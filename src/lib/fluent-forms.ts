export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  data?: any;
  errors?: any;
}

export async function submitFluentForm(formData: FormData): Promise<SubmissionResponse> {
  try {
    console.log('📤 Submitting contact form to /api/contact...');
    console.log('📝 Payload:', formData);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('📥 Response status:', response.status);

    const result = await response.json();
    console.log('📦 Result:', result);

    return result;
  } catch (error) {
    console.error('❌ Form submission error:', error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please try again or contact us via WhatsApp.',
    };
  }
}
