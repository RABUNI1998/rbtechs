import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { ArrowLeft, LifeBuoy, Mail, MessageSquare } from 'lucide-react';

export default function Support() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <Link to="/products" className="text-blue-600 font-bold hover:underline">
          &larr; Back to App Store
        </Link>
      </div>
    );
  }

  const supportEmail = 'josephmarfo1998@gmail.com';

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to={`/products/${product.id}`} className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline mb-8">
            <ArrowLeft size={18} /> Back to {product.name}
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
              <LifeBuoy size={28} />
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900">Developer Support</h1>
          </div>
          <p className="text-xl text-gray-500">How can we help you with {product.name}?</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Cards */}
        <div className="md:col-span-1 space-y-6">
          <a 
            href={`mailto:${supportEmail}?subject=${encodeURIComponent(product.name + ' Support Request')}`}
            className="block bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Mail size={20} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
            <p className="text-sm text-gray-500 mb-4">Expect a reply within 24-48 hours.</p>
            <p className="text-sm font-medium text-blue-600 break-all">{supportEmail}</p>
          </a>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
             <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4">
              <MessageSquare size={20} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Bug Reports</h3>
            <p className="text-sm text-gray-500 mb-4">Found an issue? Let us know so we can fix it in the next update.</p>
            <a href={`mailto:${supportEmail}?subject=${encodeURIComponent(product.name + ' Bug Report')}`} className="text-sm font-bold text-green-600 hover:underline">
              Report a bug &rarr;
            </a>
          </div>
        </div>

        {/* FAQs */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            
            {id === 'rb-player' ? (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Why isn't YouTube available in the Microsoft Store version?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Due to strict Microsoft Store guidelines regarding third-party video platforms, the Windows Store version is designed strictly as a local media player. If you want YouTube capabilities, you must use the Android version.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Where do downloaded files go?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Downloads are saved to your device's default Downloads folder under a dedicated "RBPlayerDownloads" subdirectory.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">I forgot my Private Vault PIN/Biometric.</h3>
                  <p className="text-gray-600 leading-relaxed">
                    For your security, the Private Vault uses strong AES-256 encryption. We do not store your PIN on our servers, and there is no "backdoor" to recover it. If you lose your PIN and cannot use Biometrics, the vaulted files cannot be recovered.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Is {product.name} free to use?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes, {product.name} offers a robust free tier. Certain advanced features may require an optional Pro upgrade.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">How do I update the app?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    If you downloaded the app from the Microsoft Store or Google Play Store, updates will be installed automatically. 
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
