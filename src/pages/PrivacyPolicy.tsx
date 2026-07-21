import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
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

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to={`/products/${product.id}`} className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline mb-8">
            <ArrowLeft size={18} /> Back to {product.name}
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <ShieldCheck size={28} />
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-xl text-gray-500">Effective Date: {product.releaseDate}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-700">
          <p className="lead text-xl">
            This Privacy Policy governs your use of <strong>{product.name}</strong>, created by {product.developer}. We respect your privacy and are committed to protecting it.
          </p>

          {id === 'rb-player' ? (
            <>
              {/* APP STORE COMPLIANCE SECTION */}
              <div className="bg-blue-50/50 rounded-2xl p-6 md:p-8 my-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-blue-900 mt-0 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg>
                  App Store & Official Editions (Microsoft Store, Play Store & Web)
                </h2>
                <p className="font-bold text-gray-900 mb-2">100% Private & User-Controlled Data</p>
                <p className="text-gray-700">
                  <strong>RB Player is designed as a privacy-first universal local and network media player.</strong> All local file indexing, playback processing, and AES-256 Private Vault encryption occur entirely offline on your local device. We do not harvest, track, or sell your personal consumption data.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Network Streaming & Services Privacy</h2>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. Universal Network Link Streamer</h3>
              <p>
                RB Player includes a Universal Link Streamer allowing you to paste direct media URLs (such as MP4, HLS, or web streams) for instant playback or offline caching. Communication happens directly between your device and the remote host server. RB TECHS does not record, log, or track your stream URLs, search queries, or downloaded files.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. OpenSubtitles Integration</h3>
              <p>
                When searching for movie subtitles, the app queries the OpenSubtitles API directly to fetch matched subtitle files. No user account data or personal identifiers are collected during this process.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Local Storage & Vault Security</h3>
              <p>
                Local file permissions (`MANAGE_EXTERNAL_STORAGE` / `runFullTrust`) are used strictly to index your audio/video libraries, update ID3 tags, and encrypt files in your PIN-protected Private Vault. Your media files and encryption PINs never leave your device.
              </p>
            </>
          ) : (
            <>
              {/* GENERIC PRIVACY POLICY FOR OTHER APPS */}
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Data Collection</h2>
              <p>
                <strong>{product.name}</strong> operates entirely locally on your device. We do not collect, transmit, or store any personal information, telemetry, usage data, or analytics. Your files and data remain strictly on your device.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Permissions</h2>
              <p>
                The application may require local storage permissions to function correctly (e.g., reading and writing files). These permissions are used exclusively for the core functionality of the app as requested by the user.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Third-Party Services</h2>
              <p>
                This application does not integrate with or send data to any third-party services, advertising networks, or tracking systems.
              </p>
            </>
          )}

          <hr className="my-10 border-gray-200" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at our dedicated <Link to={`/support/${product.id}`} className="text-blue-600 hover:underline">Support Page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
