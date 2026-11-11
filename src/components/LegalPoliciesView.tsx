import React, { useState } from 'react';
import { ShieldCheck, RotateCcw, FileText, Lock, AlertCircle, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { openWhatsAppDirect } from '../utils/whatsapp';

interface LegalPoliciesViewProps {
  initialTab?: 'privacidade' | 'trocas' | 'termos';
  overrideConfig?: typeof siteConfig;
  onBackToHome?: () => void;
}

export const LegalPoliciesView: React.FC<LegalPoliciesViewProps> = ({
  initialTab = 'privacidade',
  overrideConfig,
  onBackToHome,
}) => {
  const [activeTab, setActiveTab] = useState<'privacidade' | 'trocas' | 'termos'>(initialTab);
  const cfg = overrideConfig || siteConfig;

  return (
    <section id="politicas" className="py-12 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
            Transparência & Conformidade Legal
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Políticas e Termos Oficiais
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Consulte nossas diretrizes de privacidade (LGPD), termos de atendimento e a política de trocas e garantias fundamentada no Código de Defesa do Consumidor.
          </p>
        </div>

        {/* Tab Controls (Functional buttons with active states) */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-200/80 rounded-xl max-w-xl mx-auto mb-10">
          <button
            onClick={() => setActiveTab('privacidade')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'privacidade'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-blue-900" />
            <span>Política de Privacidade</span>
          </button>

          <button
            onClick={() => setActiveTab('trocas')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'trocas'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <RotateCcw className="w-4 h-4 text-red-600" />
            <span>Trocas e Devoluções</span>
          </button>

          <button
            onClick={() => setActiveTab('termos')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'termos'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4 text-slate-800" />
            <span>Termos de Uso</span>
          </button>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base">
          
          {/* TAB 1: POLÍTICA DE PRIVACIDADE */}
          {activeTab === 'privacidade' && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1">
                  LGPD — Lei Federal nº 13.709/2018
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Política de Privacidade e Proteção de Dados
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Última atualização e conformidade: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-base font-bold text-slate-900">1. Identificação do Controlador de Dados</h4>
                <p>
                  O responsável pelo tratamento de dados pessoais coletados por meio deste website é a pessoa jurídica:
                </p>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-800 font-mono space-y-1">
                  <p><strong>Nome Comercial:</strong> {cfg.company.displayName}</p>
                  <p><strong>Razão Social Informada:</strong> {cfg.company.legalName}</p>
                  <p><strong>Nome Fantasia no Cadastro:</strong> {cfg.company.tradeNameReceipt}</p>
                  <p><strong>CNPJ:</strong> {cfg.company.cnpj}</p>
                  <p><strong>Endereço:</strong> {cfg.company.address.fullFormatted}</p>
                  <p><strong>Canal do Encarregado / DPO:</strong> {cfg.company.contact.email}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900">2. Quais Dados Pessoais Coletamos e Para Quais Finalidades</h4>
                <p>
                  Coletamos apenas as informações estritamente necessárias para a prestação de serviços de consulta e cotação de autopeças:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-slate-700 text-sm">
                  <li><strong>Dados informados voluntariamente no formulário de orçamento:</strong> Nome do solicitante, marca, modelo, ano do veículo e especificação da peça desejada. Finalidade: identificação técnica da aplicação automotiva e formatação do pedido de cotação via WhatsApp.</li>
                  <li><strong>Dados técnicos de navegação:</strong> Endereço IP aproximado, tipo de navegador e páginas visitadas coletados por cookies de métrica com a finalidade de otimizar a velocidade do site e mensurar tráfego de campanhas de publicidade do Google Ads.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900">3. Bases Legais Aplicáveis (Artigo 7º da LGPD)</h4>
                <p>O tratamento de dados fundamenta-se nas seguintes bases legais:</p>
                <ul className="list-disc list-inside space-y-1.5 text-slate-700 text-sm">
                  <li><strong>Execução de procedimentos preliminares a pedido do titular (Art. 7º, V da LGPD):</strong> Para atendimento da solicitação de orçamento de peças feita voluntariamente pelo usuário.</li>
                  <li><strong>Legítimo interesse (Art. 7º, IX da LGPD):</strong> Para análise técnica de conversão e melhoria da navegação, assegurados os direitos fundamentais do titular.</li>
                  <li><strong>Consentimento (Art. 7º, I da LGPD):</strong> Para ativação de cookies analíticos e de publicidade personalizáveis pelo banner de cookies.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900">4. Comunicação pelo WhatsApp e Serviços de Terceiros</h4>
                <p>
                  Ao clicar para solicitar orçamento pelo WhatsApp, o usuário é direcionado à plataforma da Meta/WhatsApp. A conversa passa a ser regida também pelos Termos de Serviço e Política de Privacidade da referida plataforma. Nós nunca vendemos, alugamos ou repassamos seus dados cadastrais a corretores de dados (data brokers) ou terceiros desvinculados da operação comercial.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900">5. Direitos do Titular de Dados (Artigo 18 da LGPD)</h4>
                <p>
                  O titular poderá a qualquer momento solicitar a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou a eliminação dos dados desnecessários, mediante solicitação formal ao nosso canal de contato: <a href={`mailto:${cfg.company.contact.email}`} className="text-blue-900 font-semibold underline">{cfg.company.contact.email}</a>.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900">6. Segurança da Informação</h4>
                <p>
                  Adotamos conexões criptografadas seguras (HTTPS com certificado SSL/TLS) para tráfego seguro de dados. O formulário deste site atua como um formatador de mensagens para seu próprio dispositivo, minimizando a retenção passiva de dados sensíveis em banco de dados desnecessário.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: TROCAS E DEVOLUÇÕES */}
          {activeTab === 'trocas' && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-1">
                  Código de Defesa do Consumidor (Lei Federal nº 8.078/1990)
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Política de Trocas, Devoluções e Garantia de Peças
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Diretrizes transparentes para compras presenciais e sob encomenda via canais remotos.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900">1. Direito de Arrependimento para Vendas Remotas (Artigo 49 do CDC)</h4>
                <p>
                  Para compras concretizadas exclusivamente fora do estabelecimento comercial (como pedidos negociados e enviados à distância via WhatsApp ou telefone), o consumidor tem o direito de desistir da compra no prazo de até <strong>7 (sete) dias corridos</strong>, contados a partir da data de recebimento da peça física.
                </p>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <strong>Condições para o arrependimento:</strong> A peça deve ser devolvida sem marcas de violação ou tentativa de adaptação indevida, acompanhada da respectiva nota.
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900">2. Prazos e Condições de Garantia</h4>
                <p>
                  Emitimos garantia e nota para todos os motores comercializados:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                  <li><strong>Motores Novos:</strong> 1 (um) ano de garantia a contar da data de entrega.</li>
                  <li><strong>Motores Seminovos Revisados:</strong> 6 (seis) meses de garantia a contar da data de entrega.</li>
                </ul>
                <p className="text-xs text-slate-600">
                  A garantia cobre eventuais defeitos mecânicos internos em conformidade com o Código de Defesa do Consumidor e o termo de garantia emitido.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900">3. Hipóteses de Não Cobertura de Garantia</h4>
                <p className="text-sm">A garantia não cobre avarias decorrentes de:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                  <li>Instalação incorreta ou realizada por profissional sem qualificação adequada para a montagem de componentes mecânicos e elétricos;</li>
                  <li>Uso indevido, aplicação em veículo incompatível com as especificações do catálogo, adulteração ou sobrecarga mecânica;</li>
                  <li>Uso de aditivos, fluidos ou óleos em desacordo com o manual do veículo do fabricante.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900">4. Como Solicitar a Troca ou Devolução</h4>
                <p>
                  Para iniciar um procedimento de troca ou análise técnica de garantia:
                </p>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-700 text-sm">
                  <li>Entre em contato pelo WhatsApp oficial <strong>(11) 99243-4631</strong> ou e-mail <strong>{cfg.company.contact.email}</strong>.</li>
                  <li>Envie o número da Nota Fiscal emitida e fotos claras da peça e da etiqueta da embalagem.</li>
                  <li>Descreva detalhadamente o motivo da solicitação ou eventual anomalia identificada pela oficina mecânica.</li>
                </ol>
              </div>
            </div>
          )}

          {/* TAB 3: TERMOS DE USO */}
          {activeTab === 'termos' && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                  Regras e Condições Gerais
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Termos de Uso do Website
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Informações sobre o funcionamento do catálogo e solicitações de cotação.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900">1. Natureza Informativa e Pré-Orçamentária</h4>
                <p>
                  Este website opera como canal institucional e ferramenta de estruturação de pedidos de orçamento para a <strong>{cfg.company.displayName}</strong>. A submissão do formulário de consulta não constitui contrato de compra e venda automático, nem débito imediato em cartão de crédito.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900">2. Confirmação de Estoque, Lote e Preço</h4>
                <p>
                  No mercado automotivo, a disponibilidade de componentes é dinâmica. A validade dos preços e a confirmação de pronta entrega são formalizadas exclusivamente pela equipe comercial no WhatsApp ou balcão físico antes de qualquer transferência de pagamento.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900">3. Responsabilidade pelas Informações do Veículo</h4>
                <p>
                  O usuário é responsável pela exatidão dos dados fornecidos sobre o modelo, ano e motorização do veículo. Recomendamos sempre checar o documento do carro (CRLV) ou o número de chassis para conferência precisa no catálogo técnico das montadoras.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900">4. Propriedade Intelectual</h4>
                <p>
                  Eventuais menções ou descrições técnicas de veículos pertencem a seus respectivos titulares e são utilizadas estritamente a título de indicação de compatibilidade técnica e destinação comercial, em conformidade com o Artigo 132 da Lei de Propriedade Industrial (Lei nº 9.279/1996).
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Contact Strip */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Dúvidas sobre nossas diretrizes legais? Entre em contato diretamente com nossa administração pelo e-mail{' '}
          <a href={`mailto:${cfg.company.contact.email}`} className="text-blue-900 font-semibold underline">
            {cfg.company.contact.email}
          </a>
        </div>

      </div>
    </section>
  );
};
